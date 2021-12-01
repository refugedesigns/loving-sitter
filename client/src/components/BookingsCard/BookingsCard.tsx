import { Typography, Avatar, Button, Box, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import * as classes from "./useStyles";

const BookingsCard = () => {
  return (
    <Box sx={classes.mainWrapper}>
      <Box sx={classes.dateSettingsWrapper}>
        <Box sx={classes.date} component={Typography}>
          27 Sep, 2021 7:26 PM
        </Box>
        <IconButton sx={classes.settingsIcon} component={Settings} />
      </Box>
      <Box sx={classes.subWrapper}>
        <Box sx={classes.userInfoWrapper}>
          <Box>
            <Box component={Avatar} />
          </Box>
          <Box sx={classes.username} component={Typography}>Hatchy Hatchways</Box>
        </Box>
        <Box sx={classes.buttonWrapper}>
          <Box sx={classes.pending} component={Typography}>pending</Box>
          <Button sx={classes.button} variant="contained" disableElevation disabled>Checkout</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingsCard;
