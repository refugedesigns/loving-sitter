import { Box, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import LoginForm from "./LoginForm/LoginForm";
import { FormikHelpers } from "formik";
import login from "../../helpers/APICalls/login"
import * as classes from "./useStyles";


const Login: React.FC = () => {
  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>
  ) => {
    login(email, password).then(data => {
      if(data.error) {
        console.error({error: data.error.message})
        setSubmitting(false)
      }else if(data.success) {
        console.log(data.success)
        setSubmitting(false)
      }else {
        //Should not get here from backend!
        console.error(data)
      }
    })
    setSubmitting(false)
  };
  return (
    <Box sx={classes.mainWrapper}>
      <CssBaseline />
      <AuthHeader />
      <Box sx={classes.formWrapper}>
        <Box variant="h4" component={Typography}>
          Welcome Back!
        </Box>
        <LoginForm handleSubmit={handleSubmit} />
      </Box>
    </Box>
  );
};

export default Login;
