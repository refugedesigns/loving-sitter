import { Box, Typography, Card } from "@mui/material";
import * as classes from "./useStyles";

interface Props {
  message: string;
  time: string
}

const OtherUserBubble: React.FC<Props> = ({ message, time }) => {
  return (
    <Card sx={classes.card}>
      <Box component={Typography}>{message}</Box>
      <Box sx={classes.time} component={Typography}>
        {time}
      </Box>
    </Card>
  );
};

export default OtherUserBubble;
