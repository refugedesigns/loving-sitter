import { Schema, model } from "mongoose";
import { Request } from "src/interface";

const RequestSchema = new Schema<Request>(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "BaseUser",
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "DogSitter",
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
