import React, { useRef, useCallback } from "react";
import { Message } from "../../interface/messages";
import { updateMessages } from "../../helpers/APICalls/messages";

export default function useUpdateMessages() {
  let updateMsg = useRef<Array<string> | null>(null);

  const handleUpdateMessages = useCallback((
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    messages: Message[],
    otherUser?: { _id: string; name: string; profilePhoto: string }
  ) => {
    const updated: string[] = [];
    messages?.forEach((message) => {
      if (message.sender === otherUser?._id && message.read === false) {
        updated.push(message._id as string);
      }
    });
    updateMsg.current = updated;

    if (
      updateMsg.current !== null &&
      (updateMsg.current as string[])?.length > 0
    ) {
      updateMessages({ messageIds: updateMsg.current as string[] })
        .then((data) => {
          updateMsg.current = null;
          console.log(data);
          const updatedMsg = data.success;
          setMessages((prevMsg) => {
            // @ts-ignore
            const newMessage = [...prevMsg];
            for (const message of updatedMsg) {
              const existingMsgIndex = newMessage?.findIndex(
                (msg) => msg._id === message._id
              );
              if (!existingMsgIndex) {
                continue;
              }
              newMessage![existingMsgIndex] = message;
            }
            return newMessage;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  return {
    handleUpdateMessages,
  };
}
