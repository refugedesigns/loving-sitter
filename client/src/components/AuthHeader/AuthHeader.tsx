import { Box, IconButton, Button, Paper } from "@mui/material";
import { MenuTwoTone } from "@mui/icons-material";
import {
  authWrapper,
  mobileToggle,
  desktopButtons,
  logoImage,
  sitterText,
  loginButton,
  signUpButton,
} from "./useStyles";
import logo from "../../images/logo.png";

const AuthHeader: React.FC = () => {
  return (
    <Box sx={authWrapper} component={Paper} square>
      <Box sx={logoImage} component={IconButton}>
        <Box src={logo} component="img" alt="loving sitter logo" />
      </Box>
      <Box>
        <Box sx={mobileToggle} component={IconButton}>
          <MenuTwoTone fontSize="large" color="primary" />
        </Box>
        <Box sx={desktopButtons}>
          <Button variant="text" sx={sitterText}>
            Become a sitter
          </Button>
          <Button variant="outlined" sx={loginButton}>
            Login
          </Button>
          <Button variant="contained" sx={signUpButton} disableElevation>
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthHeader;
