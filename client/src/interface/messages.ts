export interface Message {
    [key: string]: string | boolean
}

export interface MessageApiData {
    error?: {message: string};
    success?: Message[]
}