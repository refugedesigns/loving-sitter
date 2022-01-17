import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import { StatusError } from "../customError";
import Message from "../models/Message";


export const createMessage: RequestHandler = asyncHandler(async(req, res, next) => {
    const { conversationId, text, recipient } = req.body as { conversationId: string, text: string; recipient: string}

    const message = await Message.create({
        conversationId,
        sender: req.userId,
        recipient: recipient,
        text
    })

    res.status(201).json(message)
})


export const getMessages: RequestHandler<{conversationId: string}> = asyncHandler(async(req, res, next) => {
    const { conversationId } = req.params

    const messages = await Message.find({conversationId: conversationId}) 

    res.status(200).json({
        success: [
            ...messages
        ]
    })
})