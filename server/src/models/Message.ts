import { Schema, model, Model } from "mongoose";
import { Message, MessageModel } from "../interface";

const messageSchema: Schema<Message, Model<MessageModel>> = new Schema({
    conversationId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    sender: {
        type: Schema.Types.ObjectId,
        required: true
    },
    recipient: {
        type: Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const message = model("Message", messageSchema)

export default message