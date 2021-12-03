import { NavLink } from "react-router-dom";
import { Container, Box, Typography, CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import * as classes from "./useStyles";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit";
import ProfilePhoto from "../../components/ProfilePhoto/ProfilePhoto";

const Profile = () => {
  return (
    <Box>
      <CssBaseline />
      <AuthHeader />
      <Container sx={classes.containerWrapper} maxWidth="lg">
        <Box sx={classes.items}>
          <Box sx={classes.linkItem} component={NavLink} to="/profile/edit">
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
          <ProfilePhoto />
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
