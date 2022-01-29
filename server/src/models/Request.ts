import { Schema, model, Model } from "mongoose";
import { Request, RequestModel } from "src/interface";

const RequestSchema: Schema<Request, Model<RequestModel>> = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "BaseUser",
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "DogSitter",
    },
    dropinDate: {
      date: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      }
    },
    dropoffDate: {
      date: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      }
    },
    status: {
        type: String,
        default: "pending"
    }
  },
  { timestamps: true }
);

const Request = model("Request", RequestSchema);

export default Request;
