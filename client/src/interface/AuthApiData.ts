import { User } from "./User";

export interface AuthApiDataSuccess {
  user: User
}

export interface AuthApiData {
  error?: {message: string};
  success?: AuthApiDataSuccess
}