import { FetchOptions } from "../../interface/FetchOptions";
import { ConversationApiData } from "../../interface/conversations";
import { Conversation } from "../../interface/conversations"

export const getConversation = async(userId: string): Promise<ConversationApiData> => {
  
  const fetchOptions: FetchOptions = {
    method: "GET",
    credentials: "include",
  };

  return await fetch(`${process.env.REACT_APP_BACKEND}/conversations/${userId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};

export const getRecipient = async(id?: string): Promise<{_id: string; name: string; profilePhoto: string}> => {
    const fetchOptions: FetchOptions = {
      method: "GET",
      credentials: "include",
    };

    return await fetch(
      `${process.env.REACT_APP_BACKEND}/conversations/user/${id}`,
      fetchOptions
    )
      .then((res) => res.json())
      .catch(() => ({
        error: { message: "Unable to connect to server. Please try again." },
      }));
}

export const fetchRecipientConv = async(userId: string): Promise<Conversation> => {
  const fetchOptions: FetchOptions = {
    method: "GET",
    credentials: "include",
  };

  return await fetch(
    `${process.env.REACT_APP_BACKEND}/conversations/recipient/${userId}`,
    fetchOptions
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
}
