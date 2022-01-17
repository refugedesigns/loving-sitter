import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import DogSitter from "../models/DogSitter";
import Review from "../models/Review";
import { StatusError } from "../customError";
import { Review as ReviewType } from "../interface";
import { Condition, ObjectId } from "mongoose";

export const getAllDogsitters: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const dogsitters = await DogSitter.find()
      .populate("availability")
      .populate("reviews")
      .select("-password -payments -imageGallery");

    res.status(200).json({
      success: [...dogsitters],
    });
  }
);

export const getDogsitter: RequestHandler<{ id: string }> = asyncHandler(
  async (req, res, next) => {
    const { id } = req.params;

    const dogsitter = await DogSitter.findById(id)
      .populate("availability")
      .populate({
        path: "reviews",
        populate: {
          path: "sender",
          model: "BaseUser",
          select: "-password -imageGallery -payments -email",
        },
      });

    if (!dogsitter) {
      throw new StatusError("No user found!", 422);
    }

    res.status(200).json({
      success: {
        user: {
          _id: dogsitter._id,
          name: dogsitter.name,
          email: dogsitter.email,
          isAvailable: dogsitter.isAvailable,
          isDogsitter: dogsitter.isDogsitter,
          imageGallery: dogsitter.imageGallery,
          payments: dogsitter.payments,
          availability: dogsitter.availability,
          price: dogsitter.price,
          city: dogsitter.city,
          profilePhoto: dogsitter.profilePhoto,
          reviews: dogsitter.reviews,
        },
      },
    });
  }
);

export const postReview: RequestHandler<{ id: string }> = asyncHandler(
  async (req, res, next) => {
    const { id } = req.params;
    const { rating, message } = req.body as { rating: number; message: string };

    const dogsitter = await DogSitter.findById(id);
    if (!dogsitter) {
      throw new StatusError(
        "Something is wrong, this user is not available",
        400
      );
    }
    // const reviewed = await Review.findOne({
    //   sender: req.userId as Condition<{ type: ObjectId; ref: string }>,
    //   recipient: id as Condition<{ type: ObjectId; ref: string }>,
    // });

    // if (reviewed) {
    //   throw new StatusError("You can only review a user once.", 401);
    // }

    const review = await Review.create({
      sender: req.userId,
      recipient: id,
      message: message,
      rating: rating,
    });

    dogsitter.reviews!.push(review._id);

    await dogsitter.save();

    const savedReview = await Review.findById(review._id).populate("sender");

    req.io?.emit("review", {
      review: {
        ...savedReview._doc,
      },
    });

    res.status(201).json({ review });
  }
);
