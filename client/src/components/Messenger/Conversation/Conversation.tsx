import { useState, useEffect, useRef } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Conversation as ConversationType } from "../../../interface/conversations";
import { Message } from "../../../interface/messages";
import { useAppSelector } from "../../../store/hooks";
import { getRecipient } from "../../../helpers/APICalls/conversations";
import { fetchMessages } from "../../../helpers/APICalls/messages";
import * as classes from "./useStyles";

interface Props {
  conversation: ConversationType;
  setRecipient: ({
    _id,
    name,
    profilePhoto,
  }: {
    _id: string;
    name: string;
    profilePhoto: string;
  }) => void;
  onlineUsers: { userId: string; socketId: string }[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  messages: Message[];
}

const Conversation: React.FC<Props> = ({
  conversation,
  setRecipient,
  onlineUsers,
  setMessages,
  messages
}) => {
  const loggedInUser = useAppSelector((state) => state.users);
  const otherUserId = conversation.members.find((c) => c !== loggedInUser._id);
  const [otherUser, setOtherUser] =
    useState<{ _id: string; name: string; profilePhoto: string }>();
  const isOnline = onlineUsers.some((user) => user.userId === otherUser?._id);
  const hasUnreadMessages = messages?.some(
    (message) => message.sender === otherUser?._id && message.read === false
  );
  useEffect(() => {
    getRecipient(otherUserId)
      .then((data) => {
        setOtherUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {
      setOtherUser(undefined);
    };
  }, [otherUserId, conversation]);


  return (
    <Box
      component={NavLink}
      key={conversation._id}
      to={`/messages/${conversation._id}`}
      sx={classes.mainWrapper}
      // @ts-ignore
      style={({ isActive }: { isActive: boolean }) =>
        isActive ? { backgroundColor: "#dfdfdf" } : {}
      }
      onClick={() =>
        setRecipient(
          otherUser as {
            _id: string;
            name: string;
            profilePhoto: string;
          }
        )
      }
    >
      <Box sx={classes.avatarWrapper}>
        <Box
          sx={classes.avatar}
          component={Avatar}
          src={otherUser?.profilePhoto}
        />
        <Box
          sx={isOnline ? classes.active : classes.offline}
          component={Avatar}
        />
      </Box>
      <Box sx={classes.username} variant="h6" component={Typography}>
        {otherUser?.name}
      </Box>
      {hasUnreadMessages && (
        <Box sx={classes.unreadMessages} component={Avatar} />
      )}
    </Box>
  );
};

export default Conversation;
