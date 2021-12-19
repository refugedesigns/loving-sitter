import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { User } from "../interface";
import BaseUser from "../models/BaseUser";
import DogSitter from "../models/DogSitter";
import { StatusError } from "../customError";
import generateToken from "../utils/generateToken";

export const registerUser: RequestHandler = asyncHandler(
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

    // if (user) {
    //   const token = generateToken(user._id);

    //   res.cookie("token", token, {
    //     httpOnly: true,
    //     maxAge: 3600 * 1000,
    //   });
    // }

    res.status(201).json({
      success: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  }
);

export const loginUser: RequestHandler = asyncHandler(
  async (req, res, next) => {

    const { email, password } = req.body as { email: string; password: string };

    const user = await BaseUser.findOne({ email });

    if (!user) {
      throw new StatusError("A user with this email was not found.", 422);
    }

    const isEqual = await user.matchPassword(password);

    if (!isEqual) {
      throw new StatusError("Invalid email or password.", 422);
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600 * 1000,
    });

    res.status(200).json({
      success: {
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          imageGallery: user.imageGallery,
          payments: user.payments
        },
      },
    });
  }
);

export const loadUser: RequestHandler<{ id: string }> = asyncHandler(
  async (req, res, next) => {
    const id = req.params.id;

    const user = await BaseUser.findById(id);

    res.status(200).json(user);
  }
);
