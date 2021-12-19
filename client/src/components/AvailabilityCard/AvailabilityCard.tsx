import { useState, useEffect } from "react";
import { Card, Typography, Box, Button } from "@mui/material";
import { ConstructionOutlined, DateRange } from "@mui/icons-material";
import AvailabilityDateCard from "./AvailabilityDateCard/AvailabilityDateCard";
import * as classes from "./useStyles";
import moment from "moment";

const AvailabilityCard = () => {
  const [currentWeekStart] = useState<moment.Moment>(
    moment().startOf("isoWeek")
  );
  const [currentWeekEnd] = useState<moment.Moment>(moment().endOf("isoWeek"));
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>([]);

  useEffect(() => {
    const days: string[] = [];
    let firstDay: moment.Moment = moment(
      currentWeekStart.format("l"),
      "MM-DD-YYYY"
    );
    const lastDay: string = currentWeekEnd.format("l");
    days.push(firstDay.format("Do MMM ddd"));
    while (!firstDay.isSame(lastDay)) {
      firstDay = firstDay.add(1, "days");
      days.push(firstDay.format("Do MMM ddd"));
    }
    setDaysOfWeek(days);
  }, [currentWeekEnd, currentWeekStart]);
  return (
    <Card sx={classes.cardWrapper} raised>
      <Box sx={classes.availabilityText} component={Typography} variant="h4">
        Your Availability
      </Box>
      <Box sx={classes.dateRangeWrapper}>
        <Box sx={classes.calendarIcon} component={DateRange} />
        <Box fontWeight="bold" component={Typography}>
          {currentWeekStart.format("D") +
            " - " +
            currentWeekEnd.format("D MMM YYYY")}
        </Box>
      </Box>
      <Box component="form">
        <Box>
          <AvailabilityDateCard date={daysOfWeek[0]} weekDay={daysOfWeek[0]} />
          <AvailabilityDateCard date={daysOfWeek[1]} weekDay={daysOfWeek[1]} />
          <AvailabilityDateCard date={daysOfWeek[2]} weekDay={daysOfWeek[2]} />
          <AvailabilityDateCard date={daysOfWeek[3]} weekDay={daysOfWeek[3]} />
          <AvailabilityDateCard date={daysOfWeek[4]} weekDay={daysOfWeek[4]} />
          <AvailabilityDateCard date={daysOfWeek[5]} weekDay={daysOfWeek[5]} />
          <AvailabilityDateCard date={daysOfWeek[6]} weekDay={daysOfWeek[6]} />
        </Box>
        <Button sx={classes.button} variant="contained" disableElevation>
          Save
        </Button>
      </Box>
    </Card>
  );
};

export default AvailabilityCard;
