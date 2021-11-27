import {
  Grid,
  Typography,
  Box,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import { MenuTwoTone } from "@mui/icons-material";
import SearchForm from "../SearchForm/SearchForm";
import * as classes from "./useStyles";
import logoImage from "../../../images/logo.png";

const Search: React.FC = () => {
  return (
    <Grid sx={classes.root} component="main" container>
      <CssBaseline />
      <Grid item xs={12} md={6} component={Paper} square>
        <Box sx={classes.wrapper}>
          <Box sx={classes.logoMenuWrapper}>
            <Box sx={classes.logo} component={IconButton}>
              <Box component="img" src={logoImage} alt="logo" />
            </Box>
            <Box sx={classes.menuIcon} component={IconButton}>
              <MenuTwoTone fontSize="large" color="primary" />
            </Box>
          </Box>
          <Box width="100%" maxWidth={450} p={3} alignSelf="center">
            <Box sx={classes.mainText} component={Typography} variant="h4">
              Find the care your dog deserve
            </Box>
            <SearchForm />
          </Box>
        </Box>
      </Grid>
      <Grid xs={0} md={6} component={Paper} square>
        <Box sx={classes.bgImage} component={Paper} square>
          <Box sx={classes.buttonsWrapper}>
            <Box sx={classes.sitterLink} variant="text" component={Button}>
              Become a sitter
            </Box>
            <Box sx={classes.loginButton} variant="outlined" component={Button}>
              Login
            </Box>
            <Box sx={classes.signUpButton} variant="contained" component={Button}>
              Sign Up
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Search;
