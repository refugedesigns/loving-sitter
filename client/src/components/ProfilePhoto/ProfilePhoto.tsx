import { Card, Box, Typography, Avatar, } from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
import * as classes from "./useStyles";

const ProfilePhoto = () => {
  return (
    <Card sx={classes.cardWrapper} raised>
      <Box
        variant="h3"
        sx={{
          mb: 5,
        }}
        textAlign="center"
        component={Typography}
      >
        Profile Photo
      </Box>
      <Box sx={classes.formWrapper} component="form">
        <Box
          sx={classes.coverImage}
          component="img"
          src="http://via.placeholder.com/640x360"
        />
        <Box sx={classes.addCoverImageIcon} component={AddAPhoto} />
        <Box sx={classes.avatar} component={Avatar} />
        <Box sx={classes.addAvatarImageIcon} component={AddAPhoto} />
        <Box sx={classes.text} textAlign="center" maxWidth={200} component={Typography}>
          Be sure to use a photo that clearly shows your face
        </Box>
      </Box>
    </Card>
  );
};

export default ProfilePhoto;
