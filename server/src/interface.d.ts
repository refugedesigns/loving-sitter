import { Express } from "express-serve-static-core";
import { ObjectId, Document, Model, Types } from "mongoose"


export interface User {
  name: string;
  email: string;
  password: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  profilePhoto?: string;
  about?: string;
  payments?: string[] | [] | undefined;
  imageGallery?: ObjectId[] | [] | undefined;
  isAvailable?: boolean;
  availability?: string[] | undefined;
  price?: number;
}

export interface AvailabilityDays {
  monday: {
    isAvailable: {
      type: Types;
      default: boolean;
    };
    time: {
      from?: string;
      to?: string;
    };
  };
  tuesday: {
    isAvailable: {
      type: Types;
      default: boolean;
    };
    time: {
      from?: string;
      to?: string;
    };
  };
  wednesday: {
    isAvailable: {
      type: Types;
      default: boolean;
    };
    time: {
      from?: string;
      to?: string;
    };
  };
  thursday: {
    isAvailable: {
      type: Types;
      default: boolean;
    };
    time: {
      from?: string;
      to?: string;
    };
  };
  friday: {
    isAvailable: {
      type: Types;
      default: boolean;
    };
    time: {
      from?: string;
      to?: string;
    };
  };
  saturday: {
    isAvailable: {
      type: Types;
      default: boolean;
    };
    time: {
      from?: string;
      to?: string;
    };
  };
  sunday: {
    isAvailable: {
      type: Types;
      default: boolean;
    };
    time: {
      from?: string;
      to?: string;
    };
  };
  creator: {
    type: ObjectId;
    ref: string;
  };
}

export interface UserDocument extends User, Document {
  matchPassword(password: string): (enteredPassword: string) => boolean;
}

export interface UserModel extends Model<UserDocument> {}

export interface Image {
  url: string;
}


