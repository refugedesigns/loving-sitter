import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { UserModel, UserDocument } from "../interface";

const baseOptions = {
  discriminator: "_key",
  collections: "users",
  timestamps: true,
};

export const BaseModel = model<UserModel>("BaseModel", new Schema({}, baseOptions));

const BaseUserSchema: Schema = new Schema({
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
    default: false
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
});

BaseUserSchema.methods.matchPassword = async function (this: UserDocument, enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

BaseUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const BaseUser = BaseModel.discriminator<UserDocument, UserModel>(
  "BaseUser",
  BaseUserSchema
);

export default BaseUser
