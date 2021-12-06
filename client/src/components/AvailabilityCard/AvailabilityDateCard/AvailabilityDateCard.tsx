import { useState } from "react";
import {
  CssBaseline,
  Box,
  Typography,
  InputLabel,
  TextField,
} from "@mui/material";
import { TimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Circle } from "@mui/icons-material";
import * as classes from "./useStyles";

const AvailabilityDateCard: React.FC = () => {
  const [value, setValue] = useState<boolean>();
  return (
    <Box sx={classes.cardWrapper}>
      <CssBaseline />
      <Box sx={classes.dateWrapper}>
        <Box component={Circle} fontSize="small" />
        <Box sx={classes.date} component={Typography}>
          17 June,{" "}
          <Box
            sx={{
              color: "#c0c0c0",
            }}
            component="span"
          >
            Monday
          </Box>
        </Box>
      </Box>
      <Box sx={classes.doubleTimeWrapper}>
        <Box sx={classes.timeWrapper}>
          <Box sx={classes.fromText} component={InputLabel} htmlFor="from">
            From
          </Box>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <Box
              component={TimePicker}
              value={value}
              onChange={(newValue: any) => setValue(newValue)}
              renderInput={(params: any) => (
                <Box sx={classes.timeBox} component={TextField} {...params} />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={classes.timeWrapper}>
          <Box sx={classes.toText} component={InputLabel} htmlFor="to">
            To
          </Box>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <Box
              component={TimePicker}
              value={value}
              onChange={(newValue: any) => setValue(newValue)}
              renderInput={(params: any) => (
                <Box sx={classes.timeBox} component={TextField} {...params} />
              )}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default AvailabilityDateCard;
