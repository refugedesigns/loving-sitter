import { Box, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import LoginForm from "./LoginForm/LoginForm";
import { FormikHelpers } from "formik";
import login from "../../helpers/APICalls/login";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addUser, removeUser } from "../../store/usersSlice";
import { useNavigate } from "react-router-dom";
import * as classes from "./useStyles";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users);
  const navigate = useNavigate();
  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
      } else if (data.success) {
        if (!data.success.user.isDogsitter) {
          dispatch(
            addUser({
              _id: data.success.user._id,
              name: data.success.user.name,
              email: data.success.user.email,
              profilePhoto: data.success.user.profilePhoto,
              isDogsitter: data.success.user.isDogsitter,
              imageGallery: data.success.user.imageGallery,
              payments: data.success.user.payments
            })
          );
        } else {
          dispatch(addUser({
            _id: data.success.user._id,
            name: data.success.user.name,
            email: data.success.user.email,
            isDogsitter: data.success.user.isDogsitter,
            isAvailable: data.success.user.isAvailable,
            availability: data.success.user.availability,
            profilePhoto: data.success.user.profilePhoto,
            price: data.success.user.price
          }))
        }
        const remainingMilliseconds = 60 * 60 * 1000
        const expiryDate = new Date(new Date().getTime() + remainingMilliseconds)
        localStorage.setItem("expiryDate", expiryDate.toISOString())
        setTimeout(() => {
          dispatch(removeUser())
        }, remainingMilliseconds)
        setSubmitting(false);
        console.log(user)
        navigate("/dogsitters");
      } else {
        //Should not get here from backend!
        console.error(data);
      }
    });

    setSubmitting(false);
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
