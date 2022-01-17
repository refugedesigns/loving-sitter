import { User } from "./User"

interface Keys {
  [key: string]: string | boolean | number
}

export interface Review {
  [key: string]: User | string | number | Keys 
}

// export interface Review {
//   _id: string;
//   rating: number;
//   reviewText: string;
//   sender: string;
//   recipient: string;
// }

export interface ReviewApiData {
    error?: {message: string};
    success?: Review
}