import { useState } from "react";
import { LocationOn, Star, Edit, Close } from "@mui/icons-material";
import {
  Box,
  Typography,
  Avatar,
  Button,
  TextField,
  Card,
} from "@mui/material";
import SideCard from "./SideCard/SideCard";
import Image from "../../../images/cover.jpg";
import * as classes from "./useStyles";

const SitterDetailedCard = () => {
  const [writeReview, setWriteReview] = useState<boolean>(false);
  return (
    <Box sx={classes.mainCardWrapper}>
      <Card sx={classes.subCardWrapper} raised>
        <Box>
          <Box sx={classes.imageWrapper} component="img" src={Image} />
        </Box>
        <Box sx={classes.avatarWrapper} component={Avatar} />
        <Box sx={classes.userInfoWrapper}>
          <Box variant="h5" component={Typography}>
            Hatchy Hactways
          </Box>
          <Box sx={classes.textStyles} component={Typography}>
            Loving Pet Sitter
          </Box>
          <Box sx={classes.locationWrapper}>
            <Box sx={classes.locationIcon} component={LocationOn} />
            <Box sx={classes.textStyles} component={Typography}>
              Kamloops
            </Box>
          </Box>
          <Box sx={classes.availability}>
            <Box component={Typography}>Availability:</Box>
            <Box sx={classes.days} component={Typography}>
              Mon
            </Box>
            <Box sx={classes.days} component={Typography}>
              Tues
            </Box>
            <Box sx={classes.days} component={Typography}>
              Wed
            </Box>
            <Box sx={classes.days} component={Typography}>
              Fri
            </Box>
            <Box sx={classes.days} component={Typography}>
              Thurs
            </Box>
          </Box>
        </Box>
        <Box sx={classes.lowerSectionWrapper}>
          <Box>
            <Box sx={classes.about} variant="h5" component={Typography}>
              About Me
            </Box>
            <Box component={Typography}>About me texts goes here...</Box>
          </Box>
          <Box sx={classes.ratingsWrapper}>
            <Box sx={classes.ratings} component={Typography}>
              Ratings and Reviews (0)
            </Box>
            <Box component={Typography}>
              Ratings and Reviews will appear here...
            </Box>
          </Box>
          <Box sx={classes.buttonsWrapper}>
            {!writeReview ? (
              <Button
                sx={{
                  height: 50,
                }}
                startIcon={<Edit />}
                onClick={() => setWriteReview(true)}
                variant="contained"
                disableElevation
              >
                Write a Review
              </Button>
            ) : (
              <Button
                sx={{
                  height: 50,
                }}
                startIcon={<Close />}
                onClick={() => setWriteReview(false)}
                variant="contained"
                disableElevation
              >
                Close
              </Button>
            )}
          </Box>
          {writeReview && (
            <Box>
              <Box sx={classes.reviewUserWrapper}>
                <Box component={Avatar} />
                <Box sx={classes.reviewUsername} component={Typography}>
                  Erasmus Antwi
                </Box>
              </Box>
              <Box sx={classes.starsWrapper}>
                <Box component={Typography}>Rating:</Box>
                <Box sx={classes.stars}>
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <Box component={Star} key={i} />
                    ))}
                </Box>
              </Box>
              <TextField multiline minRows={5} fullWidth />
              <Button
                sx={{
                  my: 1,
                  height: 50,
                }}
                variant="contained"
                disableElevation
              >
                Submit
              </Button>
            </Box>
          )}
        </Box>
      </Card>
      <Box>
        <SideCard />
      </Box>
    </Box>
  );
};

export default SitterDetailedCard;
