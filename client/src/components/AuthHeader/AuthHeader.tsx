import { useState } from "react";
import { Box, IconButton, Button, Avatar, AppBar } from "@mui/material";
import { MenuTwoTone } from "@mui/icons-material";
import * as classes from "./useStyles";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const AuthHeader: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <Box sx={classes.authWrapper} component={AppBar} position="sticky">
      <Box sx={classes.logoImage} component={IconButton}>
        <Box component={Link} to="/">
          <Box src={logo} component="img" alt="loving sitter logo" />
        </Box>
      </Box>
      <Box>
        <Box sx={classes.mobileToggle} component={IconButton}>
          <MenuTwoTone fontSize="large" color="primary" />
        </Box>
        {!isLoggedIn ? (
          <Box sx={classes.desktopButtons}>
            <Button variant="outlined" sx={classes.loginButton}>
              <Box sx={classes.login} component={Link} to="/login">
                Login
              </Box>
            </Button>
            <Button
              variant="contained"
              sx={classes.signUpButton}
              disableElevation
            >
              <Box sx={classes.link} component={Link} to="/signup">
                Signup
              </Box>
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
            <Button variant="text">
              <Box sx={classes.sitterText} component={Link} to="/messages">
                Messages
              </Box>
            </Button>
            <Box component={Link} to="/profile" sx={classes.avatar}>
              <Box component={Avatar} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AuthHeader;
