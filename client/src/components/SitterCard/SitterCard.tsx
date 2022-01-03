import { Card, Avatar, Typography, Box } from "@mui/material";
import { Star, LocationOn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import * as classes from "./useStyles";

interface Props {
  name: string;
  profilePhoto: string;
  location: string;
  price: number;
  id: string;
}

const SitterCard: React.FC<Props> = ({
  name,
  profilePhoto,
  location,
  price,
  id
}) => {
  const navigate = useNavigate()

  return (
    <Card onClick={() => navigate(`/dogsitters/${id}`)} sx={classes.cardWrapper} raised>
      <Box sx={classes.userInfoWrapper}>
        <Box sx={classes.avatar} component={Avatar} src={profilePhoto} />
        <Box sx={classes.textContent}>
          <Box sx={classes.title} variant="h5" component={Typography}>
            {" "}
            {name}
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
            {location}
          </Box>
        </Box>
        <Box sx={classes.price} component={Typography}>
          $ {price}/hr
        </Box>
      </Box>
    </Card>
  );
};

export default SitterCard;
