import { Box, TextField, Button, Typography, InputLabel, CircularProgress } from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import * as classes from "./useStyles";

interface Props {
  handleSubmit: (
    { email, password }: { email: string; password: string },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{ email: string; password: string }>
  ) => void;
}

const LoginForm: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Please enter a valid email"),
        password: Yup.string()
          .required("Password is required")
          .max(20, "Password too long")
          .min(6, "Password too short"),
      })}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Box onSubmit={handleSubmit} sx={classes.formWrapper} component="form">
          <Box sx={classes.emailWrapper}>
            <Box sx={classes.emailText} component={InputLabel} htmlFor="email">
              Email Address
            </Box>
            <Box
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              component={TextField}
              autoComplete="email"
              autoFocus
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              value={values.email}
              onChange={handleChange}
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
              name="password"
              autoComplete="current-password"
              variant="outlined"
              placeholder="Enter your password"
              component={TextField}
              fullWidth
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
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
              {isSubmitting ? <CircularProgress style={{ color: "white"}} /> : "Sign In"}
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
      )}
    </Formik>
  );
};

export default LoginForm;
