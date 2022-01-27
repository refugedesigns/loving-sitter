import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { StatusError } from "../customError";
import { Message as message } from "../interface";
import Message from "../models/Message";

export const createMessage: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { conversationId, text, recipient } = req.body as {
      conversationId: string;
      text: string;
      recipient: string;
    };

    const message = await Message.create({
      conversationId,
      sender: req.userId,
      recipient: recipient,
      text,
    });

    res.status(201).json(message);
  }
);

export const getMessages: RequestHandler<{ conversationId: string }> =
  asyncHandler(async (req, res, next) => {
    const { conversationId } = req.params;

    const messages = await Message.find({ conversationId: conversationId });

    res.status(200).json({
      success: [...messages],
    });
  });

export const updateMessages: RequestHandler = asyncHandler(
  async (req, res, next) => {
    const { messageIds } = req.body as { messageIds: string[] };
    const convertedIds = messageIds.map(
      (id) => new mongoose.Types.ObjectId(id)
    );

    Promise.all(
      convertedIds.map((id) => {
        return new Promise((resolve) => {
          Message.findByIdAndUpdate(
            id,
            { read: true },
            { new: true },
            (err, result) => {
              resolve(result);
            }
          );
        });
      })
    ).then((messages) => {
      res.status(200).json({
        success: messages
      });
    });
  }
);
