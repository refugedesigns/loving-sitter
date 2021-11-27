import { Box, TextField, Button, Typography, InputLabel } from "@mui/material";
import * as classes from "./useStyles";

const SignupForm = () => {
  return (
    <Box sx={classes.formWrapper} component="form">
      <Box sx={classes.emailWrapper}>
        <Box sx={classes.emailText} component={InputLabel} htmlFor="email">
          Email Address
        </Box>
        <Box
          id="email"
          type="email"
          placeholder="Your email"
          variant="outlined"
          fullWidth
          component={TextField}
        />
      </Box>
      <Box sx={classes.emailWrapper}>
        <Box sx={classes.emailText} component={InputLabel} htmlFor="email">
          Name
        </Box>
        <Box
          id="name"
          type="text"
          placeholder="Your name"
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
          placeholder="Create your password"
          component={TextField}
          fullWidth
        />
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
        Already a member?
        <Box sx={classes.signUpButton} component="span">
          Login
        </Box>
      </Box>
    </Box>
  );
};

export default SignupForm;
