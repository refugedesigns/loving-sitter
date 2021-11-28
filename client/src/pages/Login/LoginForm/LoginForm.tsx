import { Box, TextField, Button, Typography, InputLabel } from "@mui/material";
import * as classes from "./useStyles";

const LoginForm = () => {
  return (
    <Box sx={classes.formWrapper} component="form">
      <Box sx={classes.emailWrapper}>
        <Box sx={classes.emailText} component={InputLabel} htmlFor="email">
          Email Address
        </Box>
        <Box
          id="email"
          type="email"  
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          component={TextField}
        />
      </Box>
      <Box>
        <Box
          sx={classes.passwordText}
          component={InputLabel}
          htmlFor="password"
        >
          Password
        </Box>
        <Box
          id="password"
          type="password"
          variant="outlined"
          placeholder="Enter your password"
          component={TextField}
          fullWidth
        />
      </Box>
      <Box sx={classes.forgot} component={Typography}>
        Forgot Password?
      </Box>
      <Box sx={classes.buttonWrapper}>
        <Button
          sx={classes.button}
          variant="contained"
          type="submit"
          disableElevation
        >
          Sign In
        </Button>
        <Button sx={classes.button} variant="contained" disableElevation>
          Demo login
        </Button>
      </Box>
      <Box sx={classes.signUpLink} component={Typography}>
        Don't have an account?
        <Box sx={classes.signUpButton} component="span">
          Create an account
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
