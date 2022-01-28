import { FetchOptions } from "../../interface/FetchOptions";
import { ConversationApiData } from "../../interface/conversations";


export const getConversation = async (
  id: string,
  firstConv?: boolean
): Promise<ConversationApiData> => {
  const fetchOptions: FetchOptions = {
    method: "GET",
    credentials: "include",
  };

  let url = firstConv
    ? `${process.env.REACT_APP_BACKEND}/conversations/conv/${id}`
    : `${process.env.REACT_APP_BACKEND}/conversations/${id}`;

  return await fetch(url, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};

export const getRecipient = async (
  id?: string | false
): Promise<{ _id: string; name: string; profilePhoto: string }> => {
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
};

export const fetchRecipientConv = async (
  userId: string
): Promise<ConversationApiData> => {
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
};

export const createConversation = async (
  id: string
): Promise<ConversationApiData> => {
  const fetchOptions: FetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ recipientId: id }),
    credentials: "include",
  };

  return await fetch(
    `${process.env.REACT_APP_BACKEND}/conversations`,
    fetchOptions
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};
