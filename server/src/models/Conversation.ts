import { SecureClientSessionOptions } from "http2";
import { Schema, model, SchemaTypes, Model } from "mongoose";
import {
  Conversation,
  ConversationModel,
  ConversationDocument,
} from "../interface";

const conversationSchema: Schema<Conversation, Model<ConversationModel>> = new Schema(
  {
    members: [{
      type: SchemaTypes.ObjectId
    }],
  },
  { timestamps: true }
);

const conversation = model(
  "Conversation",
  conversationSchema
);

export default conversation;
