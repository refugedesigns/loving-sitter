import { Typography, Box } from "@mui/material";
import { CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import SearchForm from "./SearchForm/SearchForm";
import SitterCard from "../../components/SitterCard/SitterCard";
import * as classes from "./useStyles";
import SitterDetailedCard from "../../components/SitterCard/SitterDetailedCard/SitterDetailedCard";
import BookingsCard from "../../components/BookingsCard/BookingsCard";

const Listings = () => {
  return (
    <Box>
      <CssBaseline />
      <AuthHeader />
      <Box sx={classes.searcWrapper}>
        <Box sx={classes.resultText} variant="h4" component={Typography}>
          Your search results
        </Box>
        <SearchForm />
      </Box>
      <Box>
        <SitterCard />
      </Box>
      <SitterDetailedCard />
      <BookingsCard />
    </Box>
  );
};

export default Listings;
