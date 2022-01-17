import React, { useState, useEffect } from "react";
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
import { useAppSelector } from "../../../store/hooks";
import { Rating } from "react-simple-star-rating";
import { Formik, FormikState } from "formik";
import { Review } from "../../../interface/Review";
import { User } from "../../../interface/User";
import moment, { MomentInput } from "moment";
import * as Yup from "yup";
import * as classes from "./useStyles";

interface Props {
  name: string;
  location: string;
  availability: string[];
  price: number;
  profilePhoto: string;
  isAvailable: boolean;
  reviews?: Review[];
  handleSubmit: ({
    rating,
    reviewText,
  }: {
    rating: number;
    reviewText: string;
  }) => void;
}

const SitterDetailedCard: React.FC<Props> = ({
  name,
  location,
  availability,
  price,
  profilePhoto,
  isAvailable,
  reviews,
  handleSubmit,
}) => {
  const [writeReview, setWriteReview] = useState<boolean>(false);
  const loggedInUser = useAppSelector((state) => state.users);

  const initialValues = {
    rating: 0,
    reviewText: "",
  };

  const handleRating = (
    value: number,
    setFieldValue: (rating: string, value: number) => void
  ) => {
    const convertedRating = (value / 100) * 5;
    setFieldValue("rating", convertedRating);
  };

  return (
    <Box sx={classes.mainCardWrapper}>
      <Card sx={classes.subCardWrapper} raised>
        <Box>
          <Box sx={classes.imageWrapper} component="img" src={Image} />
        </Box>
        <Box sx={classes.avatarWrapper} component={Avatar} src={profilePhoto} />
        <Box sx={classes.userInfoWrapper}>
          <Box variant="h5" component={Typography}>
            {name}
          </Box>
          <Box sx={classes.textStyles} component={Typography}>
            Loving Pet Sitter
          </Box>
          <Box sx={classes.locationWrapper}>
            <Box sx={classes.locationIcon} component={LocationOn} />
            <Box sx={classes.textStyles} component={Typography}>
              {location}
            </Box>
          </Box>
          {isAvailable ? (
            <Box sx={classes.availability}>
              <Box component={Typography}>Availability:</Box>
              {availability.map((day, index) => (
                <Box key={index} sx={classes.days} component={Typography}>
                  {day}
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={classes.availability}>
              <Box component={Typography}>Availability:</Box>
              <Box component={Typography}>Not Available</Box>
            </Box>
          )}
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
              Ratings and Reviews ({reviews?.length})
            </Box>
            {reviews?.map((review, index) => (
              <Box sx={classes.reviewWrapper} key={index}>
                <Box
                  sx={classes.reviewImage}
                  component={Avatar}
                  src={(review.sender as User).profilePhoto}
                />
                <Box>
                  <Box sx={classes.reviewUser} component={Typography}>
                    {(review!.sender as User).name}
                  </Box>
                  <Box sx={classes.reviewStars}>
                    <Rating
                      size={25}
                      ratingValue={((review.rating as number) * 100) / 5}
                      readonly
                    />
                    <Box sx={classes.reviewTime}>
                      {moment(review.createdAt as MomentInput).fromNow()}
                    </Box>
                  </Box>
                  <Box sx={classes.reviewMessage} component={Typography}>
                    {review.message}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          {loggedInUser.email && (
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
          )}
          {writeReview && (
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object().shape({
                reviewText: Yup.string().required("This field is required."),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                handleSubmit(values);
                setSubmitting(false);
                resetForm(
                  initialValues as Partial<
                    FormikState<{ rating: number; reviewText: string }>
                  >
                );
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
                setFieldValue,
                isSubmitting,
              }) => (
                <Box onSubmit={handleSubmit} component="form">
                  <Box sx={classes.reviewUserWrapper}>
                    <Box component={Avatar} src={loggedInUser.profilePhoto} />
                    <Box sx={classes.reviewUsername} component={Typography}>
                      {loggedInUser.name}
                    </Box>
                  </Box>
                  <Box sx={classes.starsWrapper}>
                    <Box component={Typography}>Rating:</Box>
                    <Box sx={classes.stars}>
                      <Rating
                        size={25}
                        ratingValue={values.rating}
                        allowHalfIcon
                        onClick={(value) => handleRating(value, setFieldValue)}
                      />
                    </Box>
                  </Box>
                  <TextField
                    multiline
                    minRows={5}
                    fullWidth
                    name="reviewText"
                    id="reviewText"
                    helperText={touched.reviewText ? errors.reviewText : ""}
                    error={touched.reviewText && Boolean(errors.reviewText)}
                    value={values.reviewText}
                    onChange={handleChange}
                  />
                  <Button
                    sx={{
                      my: 1,
                      height: 50,
                    }}
                    variant="contained"
                    disableElevation
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              )}
            </Formik>
          )}
        </Box>
      </Card>
      <Box sx={classes.sideCardWrapper}>
        <SideCard price={price} reviews={reviews} />
      </Box>
    </Box>
  );
};

export default SitterDetailedCard;
