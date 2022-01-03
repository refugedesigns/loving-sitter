import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Box, CircularProgress, CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import * as classes from "./useStyles";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";
import ProfilePhoto from "../../components/ProfilePhoto/ProfilePhoto";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { useCookiesLogin } from "../../helpers/hooks/loginWithCookies";

interface Props {
  handleOpenModal: () => void;
}

const Profile: React.FC<Props> = ({handleOpenModal}) => {
  const { isLoading, error, cookiesLogin: loadUser } = useCookiesLogin();
  const loggedInUser = useAppSelector((state) => state.users);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser()
    if (error) {
      navigate("/dogsitters");
    }
    console.log(loggedInUser);
  }, [loadUser, error, navigate]);

  if (isLoading) {
    return (
      <Container>
        <CircularProgress color="primary" />
      </Container>
    );
  }

  return (
    <Box>
      <CssBaseline />
      <AuthHeader handleOpenModal={handleOpenModal} />
      <Container sx={classes.containerWrapper} maxWidth="lg">
        <Box sx={classes.items}>
          <Box
            sx={
              location.pathname === "/profile"
                ? classes.activate
                : classes.linkItem
            }
            component={NavLink}
            to="/profile"
          >
            Edit Profile
          </Box>
          <Box sx={classes.linkItem} component={NavLink} to="/profile/photo">
            Profile Photo
          </Box>
          <Box
            sx={classes.linkItem}
            component={NavLink}
            to="/profile/image-gallery"
          >
            Image Gallery
          </Box>
          <Box sx={classes.linkItem} component={NavLink} to="/profile/payment">
            Payment
          </Box>
          <Box sx={classes.linkItem} component={NavLink} to="/profile/security">
            Security
          </Box>
          <Box sx={classes.linkItem} component={NavLink} to="/profile/settings">
            Settings
          </Box>
        </Box>
        <Box sx={classes.componentWrapper}>
          <Routes>
            <Route path="/" element={<ProfileEdit />} />
            <Route path="/photo" element={<ProfilePhoto />} />
            <Route path="/payment" element={<PaymentCard />} />
          </Routes>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
