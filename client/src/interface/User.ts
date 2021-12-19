import { Availability } from "./Availability";

export interface User {
  _id: string;
  name: string;
  email: string;
  payments?: string[];
  imageGallery?: string[];
  isAvailable?: boolean;
  availability?: Availability;
  price?: number
}