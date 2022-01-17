import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { User, AvailabilityDays } from "../interface";
import BaseUser from "../models/BaseUser";
import DogSitter from "../models/DogSitter";
import { BaseModel } from "../models/BaseUser";
import Availability from "../models/Availability";
import { StatusError } from "../customError";
import generateToken from "../utils/generateToken";

export const registerBaseUser: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { name, email, password } = req.body as User;

    const emailExists = await BaseUser.findOne({ email: email });

    if (emailExists) {
      throw new StatusError("A user with this email already exists", 422);
    }

    const user = await BaseUser.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: { message: "Signup successful" },
    });
  }
);

export const registerDogsitter: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { isAvailable, availability, price } = req.body as {
      isAvailable: boolean;
      availability: AvailabilityDays;
      price: number;
    };

    if (price < 1 || price > 100) {
      throw new StatusError(
        "Entered value for the price is too high or too low",
        401
      );
    }

    const user = await BaseUser.findById(req.userId);

    if (!user) {
      throw new StatusError("No user found.", 422);
    }

    const availabilityDays = await Availability.create({
      ...availability,
      creator: req.userId,
    });

    const dogsitter = await DogSitter.create({
      name: user.name,
      email: user.email,
      password: user.password,
      isAvailable: isAvailable,
      imageGallery: user.imageGallery,
      payments: user.payments,
      availability: availabilityDays._id,
      price: price,
    });
    
    await BaseUser.findByIdAndDelete(req.userId)

    const token = generateToken(dogsitter._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600 * 1000,
    });


    res.status(201).json({
      success: {
        user: {
          _id: dogsitter._id,
          name: dogsitter.name,
          email: dogsitter.email,
          isAvailable: dogsitter.isAvailable,
          isDogsitter: dogsitter.isDogsitter,
          imageGallery: dogsitter.imageGallery,
          payments: dogsitter.payments,
          availability: availabilityDays,
          price: dogsitter.price,
        },
      },
    });
  }
);

export const loginUser: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { email, password } = req.body as { email: string; password: string };

    const user =
      (await BaseUser.findOne({ email })) ||
      (await DogSitter.findOne({ email }));

    if (!user) {
      throw new StatusError("A user with this email was not found.", 422);
    }

    const isEqual = user.matchPassword(password);
    console.log(isEqual);
    if (!isEqual) {
      throw new StatusError("Invalid email or password.", 422);
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600 * 1000,
    });

    const authUser = !user.isDogsitter
      ? {
          _id: user._id,
          email: user.email,
          name: user.name,
          imageGallery: user.imageGallery,
          payments: user.payments,
          isDogsitter: user.isDogsitter,
        }
      : {
          _id: user._id,
          email: user.email,
          name: user.name,
          imageGallery: user.imageGallery,
          payments: user.payments,
          isAvailable: user.isAvailable,
          isDogsitter: user.isDogsitter,
          availability: user.availability,
        };

    res.status(200).json({
      success: {
        user: {
          ...authUser,
        },
      },
    });
  }
);

export const loadUser: RequestHandler = asyncHandler(async (req, res, next) => {
  const user =
    (await BaseUser.findById(req.userId)) ||
    (await DogSitter.findById(req.userId).populate("availability"));
  
  let authUser;
  if (user) {
    authUser = !user.isDogsitter
      ? {
          _id: user._id,
          email: user.email,
          name: user.name,
          imageGallery: user.imageGallery,
          payments: user.payments,
          isDogsitter: user.isDogsitter,
        }
      : {
          _id: user._id,
          email: user.email,
          name: user.name,
          imageGallery: user.imageGallery,
          payments: user.payments,
          isAvailable: user.isAvailable,
          isDogsitter: user.isDogsitter,
          availability: user.availability,
        };
  }

  res.status(200).json({
    success: {
      user: {
        ...authUser,
      },
    },
  });
});
