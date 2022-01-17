import { Schema, model } from "mongoose";
import { Conversation } from "../interface";

const conversationSchema: Schema = new Schema<Conversation>(
  {
    members: Array,
  },
  { timestamps: true }
);

const conversation = model("Conversation", conversationSchema);

export default conversation;
