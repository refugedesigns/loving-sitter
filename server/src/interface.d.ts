import { Express } from "express-serve-static-core";
import { ObjectId, Document, Model, Types, Condition, Array } from "mongoose";

export interface User {
  name: string;
  email: string;
  password: string;
  isDogsitter: {
    type: Types;
    default: boolean;
  };
  city?: string;
  address?: string;
  phoneNumber?: string;
  profilePhoto?: string;
  about?: string;
  payments?: string[] | [] | undefined;
  imageGallery?: ObjectId[] | [] | undefined;
  isAvailable?: boolean;
  availability?: AvailabilityDays;
  price?: number;
  reviews?: Review[]
}

export interface AvailabilityDays {
  monday: {
    type: Types;
    default: boolean;
  };
  tuesday: {
    type: Types;
    default: boolean;
  };
  wednesday: {
    type: Types;
    default: boolean;
  };
  thursday: {
    type: Types;
    default: boolean;
  };
  friday: {
    type: Types;
    default: boolean;
  };
  saturday: {
    type: Types;
    default: boolean;
  };
  sunday: {
    type: Types;
    default: boolean;
  };
  creator?: {
    type: ObjectId;
    ref: string;
  };
}

export interface UserDocument extends User, Document {
  matchPassword(password: string): (enteredPassword: string) => boolean;
  _doc: {
    [key?: string]: string | number | boolean | string[] | [];
  };
}

export interface UserModel extends Model<UserDocument> {}

export interface ReviewDocument extends Review, Document {
  _doc : {
    [key?: string]: string | number | boolean;
  }
}

export interface ReviewModel extends Model<ReviewDocument> {}

export interface Image {
  url: string;
}

export interface Request {
  sender: Condition<{ type: ObjectId; ref: string }>;
  recipient: Condition<{ type: ObjectId; ref: string }>;
  status: string;
}

export interface Review {
  sender: Condition<{ type: ObjectId; ref: string }>;
  recipient: Condition<{ type: ObjectId; ref: string }>;
  message: {
    type: string;
    required: boolean;
  };
  rating: {
    type: number;
    required: true;
  };
}

export interface Conversation {
  members: Condition<{ type: Array}>;
}

export interface Message {
  conversationId: Condition<{type: ObjectId; required: boolean}>;
  sender: Condition<{type: ObjectId; ref: string}>;
  recipient: Condition<{type: ObjectId; ref: string}>;
  text: Condition<{type: Types; required: boolean}>;
  read: Condition<{type: Types; default: boolean}>;
}
