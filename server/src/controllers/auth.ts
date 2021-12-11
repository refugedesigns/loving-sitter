import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { User } from "../interface";
import BaseUser from "../models/BaseUser";
import { StatusError } from "../customError";

export const registerUser: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body as User;

    const emailExists = await BaseUser.findOne({ email: email });

    if (emailExists) {
      const error = new StatusError("A user with this email already exists");
      error.statusCode = 400;
      throw error;
    }

    const user = await BaseUser.create({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(201).json(user);
  }
);
