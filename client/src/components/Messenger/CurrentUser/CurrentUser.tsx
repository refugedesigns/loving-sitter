import { Box, Avatar, Typography } from "@mui/material";
import { CircleRounded, CircleNotifications } from "@mui/icons-material";
import * as classes from "./useStyles";

interface Props {
  profilePhoto: string;
  username: string;
  id: string;
  onlineUsers: {userId: string; socketId: string}[];
}

const CurrentUser: React.FC<Props> = ({ profilePhoto, username, id, onlineUsers }) => {
  
  const isOnline = onlineUsers.some(user => user.userId === id)
  
  return (
    <Box sx={classes.mainWrapper}>
      <Box sx={classes.avatarWrapper}>
        <Box sx={classes.avatar} component={Avatar} src={profilePhoto} />
        <Box
          sx={isOnline ? classes.active : classes.offline}
          component={Avatar}
        />
      </Box>
      <Box sx={classes.username} variant="h6" component={Typography}>
        {username}
      </Box>
    </Box>
  );
};

export default CurrentUser;
