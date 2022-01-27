import { FetchOptions } from "../../interface/FetchOptions";
import { MessageApiData } from "../../interface/messages";
import { Message } from "../../interface/messages";

export const fetchMessages = async (
  convId: string
): Promise<MessageApiData> => {
  const fetchOptions: FetchOptions = {
    method: "GET",
    credentials: "include",
  };

  return await fetch(
    `${process.env.REACT_APP_BACKEND}/messages/${convId}`,
    fetchOptions
  )
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};

export const createMessages = async ({
  conversationId,
  recipient,
  text,
}: {
  conversationId?: string;
  recipient?: string;
  text: string;
}): Promise<Message> => {
  const fetchOptions: FetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ conversationId, recipient, text }),
    credentials: "include",
  };

  return await fetch(`${process.env.REACT_APP_BACKEND}/messages`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
};

export const updateMessages = async({messageIds}: {messageIds: string[]}): Promise<{success: Message[]}> => {
  const fetchOptions: FetchOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messageIds }),
    credentials: "include",
  };

  return await fetch(`${process.env.REACT_APP_BACKEND}/messages`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: "Unable to connect to server. Please try again." },
    }));
}
