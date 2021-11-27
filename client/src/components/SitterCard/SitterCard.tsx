import { Card, Avatar, Typography, Box } from "@mui/material";
import { Star, LocationOn } from "@mui/icons-material";
import * as classes from "./useStyles";

const SitterCard = () => {
  return (
    <Card sx={classes.cardWrapper} raised>
      <Box sx={classes.userInfoWrapper}>
        <Box sx={classes.avatar} component={Avatar} />
        <Box sx={classes.textContent}>
          <Box sx={classes.title} variant="h5" component={Typography}>
            {" "}
            Hatchy Hatchways
          </Box>
          <Box sx={classes.profession} component={Typography}>
            {" "}
            Professional Dog Sitter
          </Box>
          <Box sx={classes.starWrapper}>
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Box sx={classes.star} component={Star} key={i} />
              ))}
          </Box>
        </Box>
      </Box>
      <Box sx={classes.bio} component={Typography}>
        Bio goes here...
      </Box>
      <Box sx={classes.cardExcept}>
        <Box sx={classes.locationWrapper}>
          <Box sx={classes.locationIcon} component={LocationOn} />
          <Box sx={classes.locationText} component={Typography}>
            Kamloops
          </Box>
        </Box>
        <Box sx={classes.price} component={Typography}>
          $30/hr
        </Box>
      </Box>
    </Card>
  );
};

export default SitterCard;
