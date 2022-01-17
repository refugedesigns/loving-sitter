import { NextFunction } from "express";
import { Schema, model } from "mongoose";
import {BaseModel} from "./BaseUser";
import bcrypt from "bcrypt";
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
  isDogsitter: {
    type: Boolean,
    default: true,
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
  availability: {
    type: Schema.Types.ObjectId,
    ref: "Availability"
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: [{
      type: Schema.Types.ObjectId,
      ref: "Review"
    }]
});

DogSitterSchema.methods.matchPassword = async function (
  this: UserDocument,
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Remember to remove this later
//it is for testing only

DogSitterSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const DogSitter = BaseModel.discriminator<UserDocument, UserModel>(
  "DogSitter",
  DogSitterSchema
);

export default DogSitter