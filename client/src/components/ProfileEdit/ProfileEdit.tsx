import { useState, ChangeEvent } from "react";
import {
  Card,
  Box,
  TextField,
  Button,
  Typography,
  Switch,
  Checkbox,
} from "@mui/material";
import * as classes from "./useStyles";
import { useAppSelector } from "../../store/hooks";
import useAvailability from "../../helpers/hooks/useAvailability";
const ProfileEdit = () => {
  const loggedInUser = useAppSelector((state) => state.users);
  const {
    isAvailable,
    handleChangeAvailability,
    monChecked,
    monChangeHandler,
    tuesChecked,
    tuesChangeHandler,
    wedChecked,
    wedChangeHandler,
    thursChecked,
    thursChangeHandler,
    friChecked,
    friChangeHandler,
    satChecked,
    satChangeHandler,
    sunChecked,
    sunChangeHandler
  } = useAvailability();

  return (
    <Box component={Card} raised>
      <Box sx={classes.cardWrapper} component="form">
        <Box
          sx={{
            mb: 4,
          }}
          variant="h3"
          textAlign="center"
          component={Typography}
        >
          Edit Profile
        </Box>
        {loggedInUser.isDogsitter && (
          <>
            <Box sx={classes.availableWrapper}>
              <Box sx={classes.availableText} component={Typography}>
                I'm Available:
              </Box>
              <Box
                component={Switch}
                color="primary"
                checked={isAvailable}
                onChange={handleChangeAvailability}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Box>
            <Box sx={classes.availabilty}>
              <Box sx={classes.availableText} component={Typography}>
                Availability:
              </Box>
              <Box sx={classes.availabilityDaysWrapper}>
                <Box sx={classes.availabilityDayWrapper}>
                  <Box
                    disabled={!isAvailable}
                    component={Checkbox}
                    checked={monChecked}
                    onChange={monChangeHandler}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Box component={Typography}>Mon</Box>
                </Box>
                <Box sx={classes.availabilityDayWrapper}>
                  <Box
                    disabled={!isAvailable}
                    component={Checkbox}
                    checked={tuesChecked}
                    onChange={tuesChangeHandler}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Box component={Typography}>Tue</Box>
                </Box>
                <Box sx={classes.availabilityDayWrapper}>
                  <Box
                    disabled={!isAvailable}
                    component={Checkbox}
                    checked={wedChecked}
                    onChange={wedChangeHandler}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Box component={Typography}>Wed</Box>
                </Box>
                <Box sx={classes.availabilityDayWrapper}>
                  <Box
                    disabled={!isAvailable}
                    component={Checkbox}
                    checked={thursChecked}
                    onChange={thursChangeHandler}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Box component={Typography}>Thurs</Box>
                </Box>
                <Box sx={classes.availabilityDayWrapper}>
                  <Box
                    disabled={!isAvailable}
                    component={Checkbox}
                    checked={friChecked}
                    onChange={friChangeHandler}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Box component={Typography}>Fri</Box>
                </Box>
                <Box sx={classes.availabilityDayWrapper}>
                  <Box
                    disabled={!isAvailable}
                    component={Checkbox}
                    checked={satChecked}
                    onChange={satChangeHandler}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Box component={Typography}>Sat</Box>
                </Box>
                <Box sx={classes.availabilityDayWrapper}>
                  <Box
                    disabled={!isAvailable}
                    component={Checkbox}
                    checked={sunChecked}
                    onChange={sunChangeHandler}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <Box component={Typography}>Sun</Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
        <Box
          sx={classes.fields}
          component={TextField}
          variant="outlined"
          label={<Box component={Typography}>Name</Box>}
          fullWidth
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
        <Button
          sx={classes.button}
          variant="contained"
          type="submit"
          disableElevation
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileEdit;
