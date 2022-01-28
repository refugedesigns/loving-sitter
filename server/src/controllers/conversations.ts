import Conversation from "../models/Conversation";
import DogSitter from "../models/DogSitter";
import BaseUser from "../models/BaseUser";
import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import mongoose, { ObjectId } from "mongoose";
import { StatusError } from "../customError";
import { Conversation as ConversationType } from "../interface";

export const createConversation: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { recipientId } = req.body as { recipientId: string };

    const conversation = await Conversation.create({
      members: [req.userId, recipientId],
    });

    res.status(201).json({
      success: [conversation],
    });
  }
);

export const getConversation: RequestHandler<{ userId: string }> = asyncHandler(
  async (req, res, next) => {
    const { userId } = req.params;
    const newUserId = new mongoose.Types.ObjectId(userId);
    const conversation = await Conversation.find({
      members: { $in: [newUserId] },
    });

    if (!conversation) {
      throw new StatusError("No conversation for this user", 400);
    }

    res.status(200).json({
      success: [...conversation],
    });
  }
);

export const getRecipient: RequestHandler<{ userId: string }> = asyncHandler(
  async (req, res, next) => {
    const { userId } = req.params;

    const recipient =
      (await DogSitter.findById(userId).select("name profilePhoto")) ||
      (await BaseUser.findById(userId));

    if (!recipient) {
      throw new StatusError("This user is not in the database!", 404);
    }

    res.status(200).json({
      _id: recipient._doc._id,
      name: recipient._doc.name,
      profilePhoto: recipient._doc.profilePhoto,
    });
  }
);

export const getRecipientConv: RequestHandler<{ id: string }> = asyncHandler(
  async (req, res, next) => {
    const { id } = req.params;

    const conv = await Conversation.find({
      members: {
        $all: [
          new mongoose.Types.ObjectId(req.userId),
          new mongoose.Types.ObjectId(id),
        ],
      },
    });

    if (conv.length > 0) {
      res.status(200).json({
        success: [...conv],
      });
    } else {
      res.status(404).json({ error: "Conversation not available" });
    }
  }
);

export const getConversationById: RequestHandler<{convId: string}> = asyncHandler(async(req, res, next) => {
  const { convId } = req.params

  const conv = await Conversation.findById(new mongoose.Types.ObjectId(convId))

  if(!conv) {
    throw new StatusError("No conversation available", 404)
  }

  res.status(200).json({
    success: [conv]
  })
})
