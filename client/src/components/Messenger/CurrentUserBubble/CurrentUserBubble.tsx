import { Box, Avatar, Typography, Card } from "@mui/material";
import * as classes from "./useStyles";

interface Props {
  profilePhoto: string;
  message: string;
  time: string
}

const CurrentUserBubble: React.FC<Props> = ({ profilePhoto, message, time }) => {
  return (
    <Box sx={classes.mainWrapper}>
      <Box component={Avatar} src={profilePhoto} />
      <Card sx={classes.message}>
        <Box component={Typography}>{message}</Box>
        <Box sx={classes.time} component={Typography}>{time}</Box>
      </Card>
    </Box>
  );
};

export default CurrentUserBubble;
