import { Card, Box, TextField, Button, Typography } from "@mui/material";
import * as classes from "./useStyles";
const ProfileEdit = () => {
  return (
    <Box component={Card} raised>
      <Box sx={classes.cardWrapper} component="form">
        <Box sx={{
          mb: 4
        }} variant="h3" textAlign="center" component={Typography}>
          Edit Profile
        </Box>
        <Box
          sx={classes.fields}
          component={TextField}
          variant="outlined"
          label={<Box component={Typography}>First Name</Box>}
          fullWidth
        />
        <Box
          sx={classes.fields}
          component={TextField}
          variant="outlined"
          label={<Box component={Typography}>Last Name</Box>}
        />
        <Box
          sx={classes.fields}
          component={TextField}
          variant="outlined"
          label={<Box component={Typography}>Email Address</Box>}
        />
        <Box
          sx={classes.fields}
          component={TextField}
          variant="outlined"
          label={<Box component={Typography}>City</Box>}
        />
        <Box
          sx={classes.fields}
          component={TextField}
          variant="outlined"
          label={<Box component={Typography}>Phone Number</Box>}
        />
        <Box
          sx={classes.fields}
          component={TextField}
          variant="outlined"
          label={<Box component={Typography}>Address</Box>}
        />
        <Box
          sx={classes.fields}
          component={TextField}
          variant="outlined"
          multiline
          minRows={5}
        />
        <Button sx={classes.button} variant="contained" type="submit" disableElevation>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileEdit;
