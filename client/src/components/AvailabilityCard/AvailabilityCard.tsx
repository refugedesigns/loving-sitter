import { Card, Typography, Box, Button } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import AvailabilityDateCard from "./AvailabilityDateCard/AvailabilityDateCard";
import * as classes from "./useStyles"

const AvailabilityCard = () => {
  return (
    <Card sx={classes.cardWrapper} raised>
      <Box sx={classes.availabilityText} component={Typography} variant="h4">Your Availability</Box>
      <Box sx={classes.dateRangeWrapper}>
        <Box sx={classes.calendarIcon} component={DateRange} />
        <Box fontWeight="bold" component={Typography}>6 - 12 December 2021</Box>
      </Box>
      <Box component="form">
        <Box>
          {Array(7)
            .fill(null)
            .map((_, i) => (
              <AvailabilityDateCard key={i} />
            ))}
        </Box>
        <Button sx={classes.button} variant="contained" disableElevation>Save</Button>
      </Box>
    </Card>
  );
};

export default AvailabilityCard;
