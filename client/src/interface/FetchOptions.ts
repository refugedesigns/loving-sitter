export interface FetchOptions {
  method: string;
  headers?: {
    "Content-Type": string;
  };
  body?: string;
  credentials: RequestCredentials;
  rejectUnauthorized?: boolean;
  requestCert?: boolean; 
  agent?: boolean;
}