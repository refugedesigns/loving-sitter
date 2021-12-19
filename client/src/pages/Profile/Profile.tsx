import { NavLink } from "react-router-dom";
import { Container, Box, Typography, CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import * as classes from "./useStyles";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";
import ProfilePhoto from "../../components/ProfilePhoto/ProfilePhoto"
import AvailabilityCard from "../../components/AvailabilityCard/AvailabilityCard";
import PaymentCard from "../../components/PaymentCard/PaymentCard";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();


  return (
    <Box>
      <CssBaseline />
      <AuthHeader />
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
          <Box sx={classes.linkItem} component={NavLink} to="/profile/availability">
            Availability
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
            <Route path="/availability" element={<AvailabilityCard />} />
            <Route path="/payment" element={<PaymentCard />} />
          </Routes>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
