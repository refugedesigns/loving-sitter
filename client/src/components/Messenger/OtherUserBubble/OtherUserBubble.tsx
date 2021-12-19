import { Box, Typography, Card } from "@mui/material";
import * as classes from "./useStyles";

interface Props {
  message: string;
}

const OtherUserBubble: React.FC<Props> = ({ message }) => {
  return (
    <Card sx={classes.card}>
      <Box component={Typography}>{message}</Box>
    </Card>
  );
};

export default OtherUserBubble;
