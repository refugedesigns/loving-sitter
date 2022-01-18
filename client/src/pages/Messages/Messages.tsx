import { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  CssBaseline,
  IconButton,
  TextField,
  Button,
  Card,
} from "@mui/material";
import { MoreHorizRounded } from "@mui/icons-material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import CurrentUser from "../../components/Messenger/CurrentUser/CurrentUser";
import OtherUserBubble from "../../components/Messenger/OtherUserBubble/OtherUserBubble";
import CurrentUserBubble from "../../components/Messenger/CurrentUserBubble/CurrentUserBubble";
import { useAppSelector } from "../../store/hooks";
import { getConversation } from "../../helpers/APICalls/conversations";
import { Conversation as Conversations } from "../../interface/conversations";
import Conversation from "../../components/Messenger/Conversation/Conversation";
import { fetchMessages } from "../../helpers/APICalls/messages";
import { fetchRecipientConv } from "../../helpers/APICalls/conversations";
import { Message } from "../../interface/messages";
import { Formik, FormikState } from "formik";
import { createMessages } from "../../helpers/APICalls/messages";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import moment from "moment";
import openSocket, { Socket } from "socket.io-client";
import * as classes from "./useStyles";

interface Props {
  handleOpenModal: () => void;
}

const Messages: React.FC<Props> = ({ handleOpenModal }) => {
  const [conversations, setConversations] = useState<Conversations[]>([]);
  let currentChat = useRef<Conversations[] | Conversations | null>(null);
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [otherUser, setOtherUser] =
    useState<{ _id: string; name: string; profilePhoto: string }>();
  const [selectActiveChat, setSelectActiveChat] = useState<boolean>(false);
  const loggedInUser = useAppSelector((state) => state.users);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const socket = useRef<Socket | null>(null);
  const location = useLocation();
  const user = location.search.split("=")[1];

  useEffect(() => {
    console.log(user);

    if (user) {
      fetchRecipientConv(user)
        .then((data) => {
          console.log(data)
          currentChat.current = data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  useEffect(() => {
    socket.current = openSocket(process.env.REACT_APP_SOCKET as string, {
      withCredentials: true,
    });
    loggedInUser._id !== "" && socket.current.emit("addUser", loggedInUser._id);
    socket.current.on("getUsers", (users) => {
      // console.log(users);
    });

    socket.current.on("getMessage", (data) => {
      console.log(data);
      setMessages((prevMessage) => {
        const messages = prevMessage || [];
        const updatedMessages = [...messages];
        updatedMessages.push(data);
        return updatedMessages;
      });
    });
  }, [loggedInUser._id]);

  useEffect(() => {
    if (!user) {
      getConversation(loggedInUser._id)
        .then((data) => {
          if (data.success) {
            currentChat.current = data.success;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {
      setConversations([]);
    };
  }, [loggedInUser]);

  useEffect(() => {
    console.log(currentChat.current);
    fetchMessages((currentChat.current as Conversations)?._id as string).then(
      (data) => {
        if (data.success) {
          console.log(data);
          setMessages(data.success);
        }
      }
    );
    return () => {
      setMessages(null);
    };
  }, [currentChat]);

  const handleOtherUser = (data?: {
    _id: string;
    name: string;
    profilePhoto: string;
  }) => {
    setOtherUser(data);
  };

  const handleConversation = (conv: Conversations) => {
    currentChat.current = conv;
    setSelectActiveChat(true);
  };

  const handleSubmit = ({ text }: { text: string }) => {
    console.log(text.trim());

    const message = {
      conversationId: (currentChat.current as Conversations)?._id,
      recipient: otherUser?._id,
      text: text.trim(),
    };
    createMessages(message)
      .then((data) => {
        setMessages((prevMessage) => {
          const messages = prevMessage || [];
          const updatedMessages = [...messages];
          updatedMessages.push(data);
          return updatedMessages;
        });
        socket.current?.emit("sendMessage", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box sx={classes.pageWrapper}>
      <CssBaseline />
      <AuthHeader handleOpenModal={handleOpenModal} />
      <Box sx={classes.mainWrapper} maxWidth="xl">
        <Box sx={classes.sidebarWrapper}>
          <Card sx={classes.sidebarText} square>
            <Typography variant="h6" fontWeight="bold">
              Inbox Messages
            </Typography>
          </Card>
          {conversations.map((conversation) => (
            <Box
              key={conversation._id}
              onClick={(e) => handleConversation(conversation)}
            >
              <Conversation
                conversation={conversation}
                onClickUser={handleOtherUser}
              />
            </Box>
          ))}
        </Box>
        <Box sx={classes.activeChartBox}>
          {selectActiveChat && (
            <Card sx={classes.activeUser}>
              <CurrentUser
                profilePhoto={otherUser?.profilePhoto as string}
                username={otherUser?.name as string}
              />
              <Box component={IconButton} sx={{ p: 2 }}>
                <MoreHorizRounded />
              </Box>
            </Card>
          )}
          <Box sx={classes.chartBox}>
            <Box sx={classes.chartBoxField}>
              {messages?.map((message) => {
                const time = moment(message.createdAt as string).format(
                  "h:mm A"
                );

                return (
                  <Box
                    ref={scrollRef}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    key={message._id as string}
                  >
                    {message.sender !== loggedInUser._id ? (
                      <CurrentUserBubble
                        profilePhoto={otherUser?.profilePhoto as string}
                        message={message.text as string}
                        time={time}
                      />
                    ) : (
                      <Box sx={classes.otherUser} key={message._id as string}>
                        <OtherUserBubble
                          message={message.text as string}
                          time={time}
                        />
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Formik
            initialValues={{
              text: "",
            }}
            validationSchema={Yup.object().shape({
              text: Yup.string().trim().required(),
            })}
            onSubmit={(
              value: { text: string },
              { setSubmitting, resetForm }
            ) => {
              handleSubmit(value);
              setSubmitting(false);
              resetForm({ text: "" } as Partial<FormikState<{ text: string }>>);
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              errors,
              setFieldValue,
              isSubmitting,
            }) => (
              <Box sx={classes.chartInput}>
                <Box
                  onSubmit={handleSubmit}
                  sx={classes.formWrapper}
                  component="form"
                >
                  <Box
                    sx={classes.form}
                    component={TextField}
                    multiline
                    id="text"
                    name="text"
                    placeholder="Type your message here..."
                    error={touched.text && Boolean(errors.text)}
                    value={values.text}
                    onChange={handleChange}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={classes.button}
                    disableElevation
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
