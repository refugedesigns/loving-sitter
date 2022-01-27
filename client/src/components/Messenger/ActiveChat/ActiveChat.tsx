import { useEffect, useRef, useState } from "react";
import { Box, Card, IconButton, Button, TextField } from "@mui/material";
import { MoreHorizRounded } from "@mui/icons-material";
import { Conversation as UserConversation } from "../../../interface/conversations";
import CurrentUserBubble from "../CurrentUserBubble/CurrentUserBubble";
import OtherUserBubble from "../OtherUserBubble/OtherUserBubble";
import CurrentUser from "../CurrentUser/CurrentUser";
import { useAppSelector } from "../../../store/hooks";
import { getRecipient } from "../../../helpers/APICalls/conversations";
import { updateMessages } from "../../../helpers/APICalls/messages";
import useUpdateMessages from "../../../helpers/hooks/useUpdateMessages";
import { Message } from "../../../interface/messages";
import { Formik, FormikState } from "formik";
import * as Yup from "yup";
import * as classes from "./useStyles";
import moment from "moment";

interface Props {
  messages: Message[];
  otherUser?: { _id: string; name: string; profilePhoto: string };
  handleSubmit: ({ text }: { text: string }) => void;
  onlineUsers: { userId: string; socketId: string }[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ActiveChat: React.FC<Props> = ({
  messages,
  otherUser,
  handleSubmit,
  onlineUsers,
  setMessages,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const loggedInUser = useAppSelector((state) => state.users);
  const { handleUpdateMessages } = useUpdateMessages()

  handleUpdateMessages(setMessages, messages, otherUser)

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <Box sx={classes.chartBox}>
        {otherUser && (
          <Card sx={classes.activeUser}>
            <CurrentUser
              id={otherUser?._id}
              profilePhoto={otherUser?.profilePhoto as string}
              username={otherUser?.name as string}
              onlineUsers={onlineUsers}
            />
            <Box component={IconButton} sx={{ p: 4, width: 20, height: 20 }}>
              <MoreHorizRounded />
            </Box>
          </Card>
        )}

        <Box sx={classes.chartBoxField}>
          {messages?.map((message) => {
            const time = moment(message.createdAt as string).format("h:mm A");

            return (
              <>
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
              </>
            );
          })}
        </Box>
        <Box sx={classes.chatInputWrapper}>
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
    </>
  );
};

export default ActiveChat;
