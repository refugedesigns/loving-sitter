import { Schema, model, Model } from "mongoose";
import { Socket, SocketModel } from "../interface";

const socketSchema: Schema<Socket, Model<SocketModel>> = new Schema({
    socketId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

const Socket = model("Socket", socketSchema)

export default Socket