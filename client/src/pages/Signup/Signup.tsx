import { Box, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import SignupForm from "./SignupForm/SignupForm";
import { FormikHelpers } from "formik";
import register from "../../helpers/APICalls/register";
import { useNavigate } from "react-router-dom";
import * as classes from "./useStyles";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (
    {
      name,
      email,
      password,
    }: { name: string; email: string; password: string },
    {
      setSubmitting,
    }: FormikHelpers<{ name: string; email: string; password: string }>
  ) => {
    register(name, email, password).then((data) => {
      if (data.error) {
        
        console.error({ error: data.error.message });
        setSubmitting(false);
      } else if (data.success) {
        console.log(data.success);
        setSubmitting(false);
        navigate("/login");
      } else {
        // Should not get here from backend!
        console.log({ data });
        setSubmitting(false);
      }
    });
  };
  
  return (
    <Box sx={classes.mainWrapper}>
      <CssBaseline />
      <AuthHeader />
      <Box sx={classes.formWrapper}>
        <Box variant="h4" component={Typography}>
          Sign up
        </Box>
        <SignupForm handleSubmit={handleSubmit} />
      </Box>
    </Box>
  );
};

export default Signup;
