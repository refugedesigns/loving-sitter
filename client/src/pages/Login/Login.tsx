import { Box, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import LoginForm from "./LoginForm/LoginForm";
import * as classes from "./useStyles";

const Login = () => {
  return (
    <Box sx={classes.mainWrapper}>
      <CssBaseline />
      <AuthHeader />
      <Box sx={classes.formWrapper}>
        <Box variant="h4" component={Typography}>Welcome Back!</Box>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default Login;
