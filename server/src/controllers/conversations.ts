import Conversation from "../models/Conversation";
import DogSitter from "../models/DogSitter";
import BaseUser from "../models/BaseUser"
import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import mongoose, { ObjectId } from "mongoose";
import { StatusError } from "../customError";

export const createConversation: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { recipientId } = req.body as { recipientId: string };

    const conversation = await Conversation.create({
      members: [req.userId, recipientId],
    });

    res.status(201).json({
      success: {
        conversation,
      },
    });
  }
);

export const getConversation: RequestHandler<{ userId: string }> = asyncHandler(
  async (req, res, next) => {
    const { userId } = req.params;

    const conversation = await Conversation.find({
      members: {$in: [ new mongoose.Types.ObjectId(userId)]},
    });


    if(!conversation) {
        throw new StatusError("No conversation for this user", 400)
    }

    res.status(200).json({
        success: [
            ...conversation
        ]
    })
  }
);

export const getRecipient: RequestHandler<{userId: string}> = asyncHandler(async(req, res, next) => {
  const { userId } = req.params 

  const recipient = await DogSitter.findById(userId).select("name profilePhoto") || await BaseUser.findById(userId)

  if(!recipient) {
    throw new StatusError("This user is not in the database!", 404)
  }

  res.status(200).json({
    _id: recipient._doc._id,
    name: recipient._doc.name,
    profilePhoto: recipient._doc.profilePhoto
  })
})
