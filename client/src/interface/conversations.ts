

export interface Conversation {
    members: [string, string];
    _id: string
}

export interface ConversationApiData {
    error?: {message: string},
    success?: Conversation[]
}