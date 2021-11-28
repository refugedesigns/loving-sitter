import { Box, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import SignupForm from "./SignupForm/SignupForm";
import * as classes from "./useStyles";
const Signup = () => {
  return (
    <Box sx={classes.mainWrapper}>
      <CssBaseline />
      <AuthHeader />
      <Box sx={classes.formWrapper}>
        <Box variant="h4" component={Typography}>
          Sign up
        </Box>
        <SignupForm />
      </Box>
    </Box>
  );
};

export default Signup;
