import { useState } from "react";
import { Card, Box, Typography, Avatar, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import * as classes from "./useStyles";

const ProfilePhoto = () => {
  const [fileSelected, setFileSelected] = useState<boolean>(false);
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
        <Box sx={classes.avatar} component={Avatar} />
        <Box
          sx={classes.text}
          textAlign="center"
          maxWidth={200}
          component={Typography}
        >
          Be sure to use a photo that clearly shows your face
        </Box>
        <Box sx={classes.mainButtonWrapper}>
          {!fileSelected ? (
            <Button sx={classes.fileUploadButton} variant="outlined">
              Select file from your device
            </Button>
          ) : (
            <Box sx={classes.mainButtonWrapper}>
              <Button sx={classes.fileUploadButton} color="info" variant="outlined">
                Upload
              </Button>
              <Button startIcon={<Close />} color="warning" variant="outlined" sx={classes.cancelButton}>
                Cancel
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default ProfilePhoto;
