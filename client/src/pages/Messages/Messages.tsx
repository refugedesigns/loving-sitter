import {
  Box,
  Typography,
  CssBaseline,
  IconButton,
  TextField,
  Button,
  Card,
  Container,
} from "@mui/material";
import { MoreHorizRounded } from "@mui/icons-material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import CurrentUser from "../../components/Messenger/CurrentUser/CurrentUser";
import OtherUserBubble from "../../components/Messenger/OtherUserBubble/OtherUserBubble";
import CurrentUserBubble from "../../components/Messenger/CurrentUserBubble/CurrentUserBubble";
import * as classes from "./useStyles";

interface Props {
  handleOpenModal: () => void;
}

const Messages: React.FC<Props> = ({handleOpenModal}) => {
  return (
    <Box sx={classes.pageWrapper}>
      <CssBaseline />
      <AuthHeader handleOpenModal={handleOpenModal}/>
      <Box sx={classes.mainWrapper} maxWidth="xl">
        <Box sx={classes.sidebarWrapper}>
          <Card sx={classes.sidebarText} square>
            <Typography variant="h6" fontWeight="bold">
              Inbox Messages
            </Typography>
          </Card>
        </Box>
        <Box sx={classes.activeChartBox}>
          <Card sx={classes.activeUser}>
            <CurrentUser
              profilePhoto="https://api.lorem.space/image/face?w=150&h=150&hash=8B7BCDC2"
              username="Mary Wills"
            />
            <Box component={IconButton} sx={{ p: 2 }}>
              <MoreHorizRounded />
            </Box>
          </Card>
          <Box sx={classes.chartBox}>
            <Box sx={classes.otherUser}>
              <OtherUserBubble message="Hay Marry! I'm your dogsitter for next week. I can't wait to meet your companion!" />
            </Box>
            <CurrentUserBubble
              profilePhoto="https://api.lorem.space/image/face?w=150&h=150&hash=8B7BCDC2"
              message="Hi Kenneth! So glad to hear! Looking forward to it. When can you come to pick up Spike?"
            />
            <Box sx={classes.otherUser}>
              <OtherUserBubble message="I will send you details" />
            </Box>
          </Box>
          <Box sx={classes.chartInput}>
            <Box sx={classes.formWrapper} component="form">
              <Box
                sx={classes.form}
                component={TextField}
                multiline
                placeholder="Type your message here..."
              />
              <Button variant="contained" sx={classes.button} disableElevation>
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Messages;
