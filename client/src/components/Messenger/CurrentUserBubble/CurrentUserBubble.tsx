import { Box, Avatar, Typography, Card } from "@mui/material";
import * as classes from "./useStyles";

interface Props {
  profilePhoto: string;
  message: string;
}

const CurrentUserBubble: React.FC<Props> = ({ profilePhoto, message }) => {
  return (
    <Box sx={classes.mainWrapper}>
      <Box component={Avatar} src={profilePhoto} />
      <Card sx={classes.message}>
        <Box component={Typography}>{message}</Box>
      </Card>
    </Box>
  );
};

export default CurrentUserBubble;
