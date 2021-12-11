import { Express } from "express-serve-static-core";
import { ObjectId } from "mongoose"


export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  city?: string;
  address?: string;
  phoneNumber?: string;
  profilePhoto?: string;
  about?: string;
  payments?: string[] | [] | undefined;
  imageGallery: ObjectId[] | [] | undefined
}

export interface Image {
  url: string;
}


