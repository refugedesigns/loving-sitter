import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
import { User } from "src/interface";

const BaseUserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  city: String,
  address: String,
  phoneNumber: String,
  profilePhoto: String,
  about: String,
  payments: [],
  imageGallery: [{
    type: Schema.Types.ObjectId,
    ref: "Image"
  }]
}, {timestamps: true, collection: "users", discriminatorKey: "type"})

BaseUserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

BaseUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const BaseUser = model("BaseUser", BaseUserSchema)

export default BaseUser