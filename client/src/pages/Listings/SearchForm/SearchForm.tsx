import { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { DatePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import * as classes from "./useStyles";

const SearchForm: React.FC = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Box sx={classes.searchForm}>
      <Box sx={classes.textInput} component={TextField} />
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Box
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
          renderInput={(params: any) => (
            <Box
              sx={classes.dropIn}
              component={TextField}
              {...params}
              label="Drop in"
              defaultValue="mm/dd"
              InputProps={{
                endAdornment: null,
              }}
            />
          )}
          component={DatePicker}
          mask="__/__"
        />
        <Box
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
          renderInput={(params: any) => (
            <Box
              sx={classes.dropOff}
              component={TextField}
              {...params}
              label="Drop off"
              placeholder="mm/dd"
              InputProps={{
                endAdornment: null,
              }}
            />
          )}
          component={DatePicker}
        />
      </LocalizationProvider>
      <Button variant="text" sx={classes.resetButton}>
       Reset
      </Button>
    </Box>
  );
};

export default SearchForm;
