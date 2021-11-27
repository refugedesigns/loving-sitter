import { useState } from "react";
import {
  TextField,
  Box,
  InputLabel,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import * as classes from "./useStyles";

const SearchForm: React.FC = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <form>
      <Grid container>
        <Box sx={classes.searchBox} item xs={12} component={Grid}>
          <Box sx={classes.searchInputLabel} component={InputLabel} htmlFor="location">
            Where
          </Box>
          <Box
            id="location"
            fullWidth
            name="location"
            variant="outlined"
            component={TextField}
          />
        </Box>
        <Grid item xs={12} container>
          <Box sx={classes.dateText} component={Typography}>
            Drop in / Drop Off
          </Box>
          <Grid item xs={12} component={Box}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <Box
                value={value}
                onChange={(newValue: any) => setValue(newValue)}
                renderInput={(params: any) => (
                  <Box sx={classes.dropIn} {...params} component={TextField} />
                )}
                component={DatePicker}
              />
              <Box
                value={value}
                onChange={(newValue: any) => setValue(newValue)}
                renderInput={(params: any) => (
                  <Box sx={classes.dropOff} {...params} component={TextField} />
                )}
                component={DatePicker}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Box
          sx={classes.submit}
          type="submit"
          variant="contained"
          disableElevation
          color="primary"
          component={Button}
        >
          Find my dog sitter
        </Box>
      </Grid>
    </form>
  );
};

export default SearchForm;
