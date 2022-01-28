import { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  CssBaseline,
  IconButton,
  TextField,
  Button,
  Card,
  Avatar,
} from "@mui/material";
import { MoreHorizRounded } from "@mui/icons-material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import CurrentUser from "../../components/Messenger/CurrentUser/CurrentUser";
import { useAppSelector } from "../../store/hooks";
import { getConversation } from "../../helpers/APICalls/conversations";
import { Conversation as Conversations } from "../../interface/conversations";
import ActiveChat from "../../components/Messenger/ActiveChat/ActiveChat";
import { fetchMessages } from "../../helpers/APICalls/messages";
import { getRecipient } from "../../helpers/APICalls/conversations";
import { Routes, Route } from "react-router-dom";
import { Message } from "../../interface/messages";
import { createMessages } from "../../helpers/APICalls/messages";
import { useLocation } from "react-router-dom";
import openSocket, { Socket } from "socket.io-client";
import * as classes from "./useStyles";
import Conversation from "../../components/Messenger/Conversation/Conversation";

interface Props {
  handleOpenModal: () => void;
}

const Messages: React.FC<Props> = ({ handleOpenModal }) => {
  const [conversations, setConversations] = useState<Conversations[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const loggedInUser = useAppSelector((state) => state.users);
  const socket = useRef<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<
    Array<{ socketId: string; userId: string }>
  >([]);
  const [otherUser, setOtherUser] =
    useState<{ _id: string; name: string; profilePhoto: string }>();
  const location = useLocation();
  const currentChatId = location.pathname.split("/")[2];

  useEffect(() => {
    socket.current = openSocket(process.env.REACT_APP_SOCKET as string, {
      withCredentials: true,
    });

    socket.current?.on("connect", () => {
      console.log("connected");
      loggedInUser._id !== "" &&
        socket.current?.emit("addUser", loggedInUser._id);
    });

    socket.current.on("getUsers", (users) => {
      console.log(users);
      setOnlineUsers(users);
    });

    socket.current.on("removeUser", (users) => {
      console.log(users);
      setOnlineUsers(users);
    });

    socket.current.on("getMessage", (data) => {
      console.log(data);
      setMessages((prevMessage) => {
        // @ts-ignore
        const updatedMessages = [...prevMessage];
        updatedMessages.push(data);
        return updatedMessages;
      });
    });
  }, [loggedInUser._id]);

  console.log(socket);
  useEffect(() => {
    getConversation(loggedInUser._id)
      .then((data) => {
        if (data.success) {
          setConversations(data.success);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setConversations([]);
    };
  }, [loggedInUser]);

  useEffect(() => {
    if (currentChatId) {
      getConversation(currentChatId, true).then((data) => {
        if (data.success) {
          let conv = data.success;
          const otherUserId =
            loggedInUser._id !== "" &&
            conv[0].members.find((id) => id !== loggedInUser._id);
          getRecipient(otherUserId)
            .then((data) => {
              setOtherUser(data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });

      fetchMessages(currentChatId).then((data) => {
        if (data.success) {
          setMessages(data.success);
        } else {
          console.log(data);
        }
      });
    }
    return () => {
      setMessages([]);
    };
  }, [currentChatId, loggedInUser._id]);

  const handleSubmit = ({ text }: { text: string }) => {
    console.log(text.trim());

    const message = {
      conversationId: currentChatId,
      recipient: otherUser?._id,
      text: text.trim(),
    };
    createMessages(message)
      .then((data) => {
        console.log(data);
        setMessages((prevMessage) => {
          const messages = prevMessage || [];
          const updatedMessages = [...messages];
          updatedMessages.push(data);
          return updatedMessages;
        });
        data && socket.current?.emit("sendMessage", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={classes.pageWrapper}>
      <CssBaseline />
      <AuthHeader handleOpenModal={handleOpenModal} />
      <Box sx={classes.mainWrapper} maxWidth="xl">
        <Box sx={classes.sidebarWrapper}>
          <Box sx={classes.sidebarDiv}>
            <Box sx={classes.sidebarText}>
              <Typography textAlign="center" fontWeight="bold" fontSize="20px">
                Inbox Messages
              </Typography>
            </Box>
            <Box sx={classes.convWrapper}>
              {conversations.map((conversation) => (
                <Conversation
                  key={conversation._id}
                  conversation={conversation}
                  setRecipient={setOtherUser}
                  onlineUsers={onlineUsers}
                  setMessages={setMessages}
                  messages={messages}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box sx={classes.activeChartBox}>
          <Routes>
            <Route
              path="/:convId"
              element={
                <ActiveChat
                  messages={messages}
                  otherUser={otherUser}
                  handleSubmit={handleSubmit}
                  onlineUsers={onlineUsers}
                  setMessages={setMessages}
                />
              }
            />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
