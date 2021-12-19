import { Schema, model } from "mongoose";
import {BaseModel} from "./BaseUser";
import { UserDocument, UserModel, User } from "../interface"


const DogSitterSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: String,
  address: String,
  phoneNumber: String,
  profilePhoto: String,
  about: String,
  payments: [],
  imageGallery: [
    {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
  ],
  isAvailable: {
    type: Boolean,
    default: false,
  },
  availability: [],
  price: {
    type: Number,
    required: true,
  },
});

const DogSitter = BaseModel.discriminator<UserDocument, UserModel>(
  "DogSitter",
  DogSitterSchema
);

export default DogSitter