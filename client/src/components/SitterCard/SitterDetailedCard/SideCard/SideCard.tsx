import { useState, useEffect } from "react";
import { Box, Card, Typography, Button, TextField } from "@mui/material";
import { DatePicker, TimePicker } from "formik-mui-lab";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Rating } from "react-simple-star-rating";
import { Review } from "../../../../interface/Review";
import sumRating from "../../../../utils/ratings";
import { useNavigate } from "react-router-dom";
import { Conversation } from "../../../../interface/conversations";
import {
  fetchRecipientConv,
  createConversation,
} from "../../../../helpers/APICalls/conversations";
import { Formik, FormikState, Field, Form } from "formik";
import moment from "moment"
import { useAppSelector } from "../../../../store/hooks";
import * as Yup from "yup";
import * as classes from "./useStyles";
import "./formik-field.module.css";

interface Props {
  _id: string;
  price: number;
  reviews?: Review[];
}

const SideCard: React.FC<Props> = ({ _id, price, reviews }) => {
  const loggedInUser = useAppSelector(state => state.users)
  const [conv, setConv] = useState<Conversation[] | Array<Conversation>>([]);
  const navigate = useNavigate();
  const finalRating = sumRating(reviews);
  const initialValues: {
    dropinDate: Date | string;
    dropinTime: Date | string;
    dropoffTime: Date | string;
    dropoffDate: Date | string;
  } = {
    dropinDate: "",
    dropinTime: "",
    dropoffDate: "",
    dropoffTime: "",
  };

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

  const handleSubmit = (values: {
    dropinDate: Date | string;
    dropinTime: Date | string;
    dropoffDate: Date | string;
    dropoffTime: Date | string;
  }): void => {
      // Check if logged in user if not send user feedback
      const { dropinDate, dropinTime, dropoffDate, dropoffTime } = values
      const convertedDropinDate = moment(dropinDate).format("DD/MM/YYYY")
      const convertedDropinTime = moment(dropinTime).format("HH:mm a")
      const convertedDropoffDate = moment(dropoffDate).format("DD/MM/YYYY")
      const convertedDropoffTime = moment(dropoffTime).format("HH:mm a")

      console.log(convertedDropinDate, convertedDropinTime)
      console.log(convertedDropoffDate, convertedDropoffTime)
  };

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
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          dropinDate: Yup.date()
            .min(new Date(), "Please choose a future date")
            .required("A drop in date is required"),
          dropinTime: Yup.string().required("A drop in time is required"),
          dropoffDate: Yup.date()
            .when(
              "dropinDate",
              (dropinDate, schema) =>
                dropinDate &&
                schema.min(
                  dropinDate,
                  "Drop off date has to be more than dropin date"
                )
            )
            .required("A drop off date is required"),
          dropoffTime: Yup.string().required("A drop off time is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values)
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
          isSubmitting,
          setFieldValue,
        }) => (
          <LocalizationProvider dateAdapter={DateAdapter}>
            <Box component={Form} sx={classes.form}>
              <Box sx={classes.dropinField}>
                <Box component={Typography}>Drop-in</Box>
                <Box sx={classes.dateField}>
                  <Field
                    name="dropinDate"
                    component={DatePicker}
                    style={{ width: "100%", marginBottom: "10px" }}
                  />
                </Box>

                <Field name="dropinTime" component={TimePicker} />
              </Box>
              <Box sx={classes.dropoffField}>
                <Box component={Typography}>Drop-Off</Box>
                <Box sx={classes.dateField}>
                  <Field name="dropoffDate" component={DatePicker} />
                </Box>

                <Field name="dropoffTime" component={TimePicker} />
              </Box>
              {/* <LocalizationProvider dateAdapter={DateAdapter}>
                  <Box
                    value={values.dropoffDate}
                    onChange={(value: any) =>
                      setFieldValue("dropoffDate", value)
                    }
                    renderInput={(params: any) => (
                      <Box
                        component={TextField}
                        {...params}
                        label="Drop off"
                        helperText={
                          touched.dropoffDate ? errors.dropoffDate : ""
                        }
                        error={
                          touched.dropoffDate && Boolean(errors.dropoffDate)
                        }
                      />
                    )}
                    component={DatePicker}
                  />
                  <Box
                    value={values.dropoffTime}
                    onChange={(value: any) =>
                      setFieldValue("dropoffTime", value)
                    }
                    renderInput={(params: any) => (
                      <Box
                        sx={classes.timePicker}
                        component={TextField}
                        {...params}
                        label="Drop off"
                        placeholder="mm/dd"
                        helperText={
                          touched.dropoffTime ? errors.dropoffTime : ""
                        }
                        error={
                          touched.dropoffTime && Boolean(errors.dropoffTime)
                        }
                      />
                    )}
                    component={TimePicker}
                  />
                </LocalizationProvider> */}
              <Button
                type="submit"
                sx={classes.requestButton}
                variant="contained"
                disableElevation
              >
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
            </Box>
          </LocalizationProvider>
        )}
      </Formik>
    </Card>
  );
};

export default SideCard;
