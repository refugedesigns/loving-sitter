import { useState } from "react";
import { Box, Card, Typography, Button, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Star } from "@mui/icons-material";
import * as classes from "./useStyles";

interface Props {
  price: number
}

const SideCard: React.FC<Props> = ({price}) => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Card sx={classes.cardWrapper} raised>
      <Box sx={classes.price} variant="h5" component={Typography}>
        $ {price}/hr
      </Box>
      <Box sx={classes.starsWrapper}>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Box sx={classes.stars} component={Star} key={i} />
          ))}
      </Box>
      <Box>
        <Box component={Typography}>Drop-in</Box>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <Box
            value={value}
            onChange={(newValue: any) => setValue(newValue)}
            renderInput={(params: any) => (
              <Box
                component={TextField}
                {...params}
                label="Drop in"
                defaultValue="mm/dd"
              />
            )}
            component={DatePicker}
          />
          <Box
            value={value}
            onChange={(newValue: any) => setValue(newValue)}
            renderInput={(params: any) => (
              <Box
                sx={classes.timePicker}
                component={TextField}
                {...params}
                label="Drop off"
                placeholder="mm/dd"
              />
            )}
            component={TimePicker}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={classes.dropOffWrapper}>
        <Box component={Typography}>Drop-Off</Box>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <Box
            value={value}
            onChange={(newValue: any) => setValue(newValue)}
            renderInput={(params: any) => (
              <Box
                component={TextField}
                {...params}
                label="Drop in"
                defaultValue="mm/dd"
              />
            )}
            component={DatePicker}
          />
          <Box
            value={value}
            onChange={(newValue: any) => setValue(newValue)}
            renderInput={(params: any) => (
              <Box
                sx={classes.timePicker}
                component={TextField}
                {...params}
                label="Drop off"
                placeholder="mm/dd"
              />
            )}
            component={TimePicker}
          />
        </LocalizationProvider>
      </Box>
      <Button sx={classes.requestButton} variant="contained" disableElevation>Send Request</Button>
      <Button sx={classes.messageButton} variant="contained" disableElevation>
        Message
      </Button>
    </Card>
  );
};

export default SideCard;
