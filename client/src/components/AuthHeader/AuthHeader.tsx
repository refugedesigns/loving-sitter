import { useEffect, useState, useRef } from "react";
import { Box, IconButton, Button, Avatar, AppBar } from "@mui/material";
import { MenuTwoTone } from "@mui/icons-material";
import * as classes from "./useStyles";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { useCookiesLogin } from "../../helpers/hooks/loginWithCookies";
import MenuListComposition from "../MenuList/MenuListComposition";

interface Props {
  handleOpenModal?: () => void;
}

const AuthHeader: React.FC<Props> = ({ handleOpenModal }) => {
  const loggedInUser = useAppSelector((state) => state.users);
  const { cookiesLogin } = useCookiesLogin();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  useEffect(() => {
    cookiesLogin();
  }, []);

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
        {!loggedInUser.email ? (
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
            {!loggedInUser.isDogsitter && (
              <Button
                onClick={handleOpenModal}
                variant="text"
                sx={classes.sitterText}
              >
                Become a sitter
              </Button>
            )}
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
            <Box sx={classes.avatar}>
              <Box
                sx={{
                  border: "1px solid black",
                }}
                component={Avatar}
                src={
                  loggedInUser.profilePhoto || "https://robohash.org/big.png"
                }
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              />
            </Box>
            <MenuListComposition
              open={open}
              anchorRef={anchorRef}
              handleClose={handleClose}
              handleListKeyDown={handleListKeyDown}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AuthHeader;
