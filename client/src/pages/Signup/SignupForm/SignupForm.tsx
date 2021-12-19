import {
  Box,
  TextField,
  Button,
  Typography,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import * as classes from "./useStyles";

interface Props {
  handleSubmit: (
    {
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      name: string;
      email: string;
      password: string;
    }>
  ) => void;
}

const SignupForm: React.FC<Props> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .required("Email is required")
          .email("Email is not valid"),
        password: Yup.string()
          .required("Password is required")
          .max(100, "Password is too long")
          .min(6, "Password is too short"),
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
        <Box
          onSubmit={handleSubmit}
          sx={classes.formWrapper}
          component="form"
          noValidate
        >
          <Box sx={classes.emailWrapper}>
            <Box sx={classes.emailWrapper}>
              <Box
                sx={classes.emailText}
                component={InputLabel}
                htmlFor="email"
              >
                Name
              </Box>
              <Box
                id="name"
                name="name"
                autoComplete="current-name"
                autoFocus
                placeholder="Your name"
                variant="outlined"
                fullWidth
                component={TextField}
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                value={values.name}
                onChange={handleChange}
              />
            </Box>
            <Box sx={classes.emailText} component={InputLabel} htmlFor="email">
              Email Address
            </Box>
            <Box
              id="email"
              name="email"
              type="email"
              autoComplete="current-email"
              placeholder="Your email"
              variant="outlined"
              fullWidth
              component={TextField}
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
              autoComplete="current-password"
              variant="outlined"
              placeholder="Create your password"
              component={TextField}
              fullWidth
              helperText={touched.password ? errors.password : ""}
              error={touched.password && Boolean(errors.password)}
              value={values.password}
              onChange={handleChange}
            />
          </Box>
          <Box sx={classes.buttonWrapper}>
            <Button
              sx={classes.button}
              variant="contained"
              type="submit"
              disableElevation
            >
              {isSubmitting ? (
                <CircularProgress style={{ color: "white" }} />
              ) : (
                "Sign In"
              )}
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
      )}
    </Formik>
  );
};

export default SignupForm;
