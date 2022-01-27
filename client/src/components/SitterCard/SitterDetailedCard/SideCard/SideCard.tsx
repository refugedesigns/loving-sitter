import { useState, useEffect } from "react";
import { Box, Card, Typography, Button, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Rating } from "react-simple-star-rating";
import { Review } from "../../../../interface/Review";
import sumRating from "../../../../utils/ratings";
import { useNavigate } from "react-router-dom";
import {
  Conversation,
  ConversationApiData,
} from "../../../../interface/conversations";
import {
  fetchRecipientConv,
  createConversation,
} from "../../../../helpers/APICalls/conversations";
import * as classes from "./useStyles";

interface Props {
  _id: string;
  price: number;
  reviews?: Review[];
}

const SideCard: React.FC<Props> = ({ _id, price, reviews }) => {
  const [value, setValue] = useState<Date | null>(null);
  const [conv, setConv] = useState<Conversation[] | Array<Conversation>>([]);
  const [error, setError] = useState<string>();
  const navigate = useNavigate();
  const finalRating = sumRating(reviews);
  console.log(_id);

  const handleNavMessagePage = () => {
    let newConv: Conversation[] | Conversation;
    if (conv.length === 0) {
      createConversation(_id).then((data) => {
        if (data.success) {
          newConv = data.success as Conversation[];
          console.log(newConv[0]._id);
          navigate(`/messages/${newConv[0]._id}`);
        }
      });
    } else {
      console.log(conv);
      console.log((conv as Conversation[])[0]._id);
      navigate(`/messages/${(conv as Conversation[])[0]._id}`);
    }
  };
  console.log(conv);
  useEffect(() => {
    fetchRecipientConv(_id)
      .then((data) => {
        if (data.success) {
          setConv(data.success);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      setConv([]);
      setValue(null);
    };
  }, []);

  return (
    <Card sx={classes.cardWrapper} raised>
      <Box sx={classes.price} variant="h5" component={Typography}>
        $ {price}/hr
      </Box>
      <Box sx={classes.starsWrapper}>
        <Rating ratingValue={finalRating as number} readonly />
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
      <Button sx={classes.requestButton} variant="contained" disableElevation>
        Send Request
      </Button>
      <Button
        onClick={handleNavMessagePage}
        sx={classes.messageButton}
        variant="contained"
        disableElevation
      >
        Message
      </Button>
    </Card>
  );
};

export default SideCard;
