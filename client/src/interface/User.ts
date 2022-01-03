import { Availability } from "./Availability";

export interface User {
  _id: string;
  name: string;
  email: string;
  isDogsitter: boolean | null;
  profilePhoto?: string;
  payments?: string[];
  imageGallery?: string[];
  isAvailable?: boolean | null;
  availability?: Availability | null;
  price?: number | null;
  address?: string;
  phone?: string;
  about?: string;
  city?: string;
}