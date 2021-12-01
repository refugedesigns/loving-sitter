import { useState } from "react";
import { Box, IconButton, Button, Paper, Avatar, AppBar } from "@mui/material";
import { MenuTwoTone } from "@mui/icons-material";
import * as classes from "./useStyles";
import logo from "../../images/logo.png";

const AuthHeader: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <Box sx={classes.authWrapper} component={AppBar} position="sticky">
      <Box sx={classes.logoImage} component={IconButton}>
        <Box src={logo} component="img" alt="loving sitter logo" />
      </Box>
      <Box>
        <Box sx={classes.mobileToggle} component={IconButton}>
          <MenuTwoTone fontSize="large" color="primary" />
        </Box>
        {!isLoggedIn ? (
          <Box sx={classes.desktopButtons}>
            <Button variant="outlined" sx={classes.loginButton}>
              Login
            </Button>
            <Button
              variant="contained"
              sx={classes.signUpButton}
              disableElevation
            >
              Sign up
            </Button>
          </Box>
        ) : (
          <Box sx={classes.desktopButtons}>
            <Button variant="text" sx={classes.sitterText}>
              Become a sitter
            </Button>
            <Button variant="text" sx={classes.sitterText}>
              Notifications
            </Button>
            <Button variant="text" sx={classes.sitterText}>
              My Bookings
            </Button>
            <Button variant="text" sx={classes.sitterText}>
              Messages
            </Button>
            <Box sx={classes.avatar}>
              <Box component={Avatar} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AuthHeader;
