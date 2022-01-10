import React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Switch,
  Checkbox,
  TextField,
  CircularProgress,
} from "@mui/material";
import { Formik, FormikHelpers, FormikState } from "formik";
import * as Yup from "yup";
import * as classes from "./useStyles";


interface Props {
  open: boolean;
  handleClose: () => void;
  handleSubmit: ({
    isAvailable,
    monChecked,
    tuesChecked,
    wedChecked,
    thursChecked,
    friChecked,
    satChecked,
    sunChecked,
    price,
  }: {
    isAvailable: boolean;
    monChecked: boolean;
    tuesChecked: boolean;
    wedChecked: boolean;
    thursChecked: boolean;
    friChecked: boolean;
    satChecked: boolean;
    sunChecked: boolean;
    price: number;
  }) => void;
}

const SitterModal: React.FC<Props> = React.memo(
  ({ open, handleClose, handleSubmit }) => {
    const initialValues = {
      isAvailable: false,
      monChecked: false,
      tuesChecked: false,
      wedChecked: false,
      thursChecked: false,
      friChecked: false,
      satChecked: false,
      sunChecked: false,
      price: 0,
    };
    return (
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={Yup.object().shape({
          price: Yup.number()
            .required("Please enter a number")
            .min(1, "Price too low")
            .max(100, "Price too high"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSubmit(values);
          resetForm(
            initialValues as Partial<
              FormikState<{
                isAvailable: boolean;
                monChecked: boolean;
                tuesChecked: boolean;
                wedChecked: boolean;
                thursChecked: boolean;
                friChecked: boolean;
                satChecked: boolean;
                sunChecked: boolean;
                price: number;
              }>
            >
          );
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
        }) => (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box onSubmit={handleSubmit} component="form" sx={classes.style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Become a sitter
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please set your availability to become a sitter
              </Typography>

              <Box sx={classes.availableWrapper}>
                <Box sx={classes.availableText} component={Typography}>
                  I'm Available:
                </Box>
                <Box
                  component={Switch}
                  color="primary"
                  checked={values.isAvailable}
                  onChange={handleChange}
                  id="isAvailable"
                  name="isAvailable"
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Box>
              <Box sx={classes.availabilty}>
                <Box sx={classes.availableText} component={Typography}>
                  Availability:
                </Box>
                <Box sx={classes.availabilityDaysWrapper}>
                  <Box sx={classes.availabilityDayWrapper}>
                    <Box
                      disabled={!values.isAvailable}
                      component={Checkbox}
                      checked={values.monChecked}
                      onChange={handleChange}
                      id="monChecked"
                      name="monChecked"
                    />
                    <Box component={Typography}>Mon</Box>
                  </Box>
                  <Box sx={classes.availabilityDayWrapper}>
                    <Box
                      disabled={!values.isAvailable}
                      component={Checkbox}
                      checked={values.tuesChecked}
                      onChange={handleChange}
                      id="tuesChecked"
                      name="tuesChecked"
                    />
                    <Box component={Typography}>Tue</Box>
                  </Box>
                  <Box sx={classes.availabilityDayWrapper}>
                    <Box
                      disabled={!values.isAvailable}
                      component={Checkbox}
                      checked={values.wedChecked}
                      id="weChecked"
                      name="wedChecked"
                      onChange={handleChange}
                    />
                    <Box component={Typography}>Wed</Box>
                  </Box>
                  <Box sx={classes.availabilityDayWrapper}>
                    <Box
                      disabled={!values.isAvailable}
                      component={Checkbox}
                      checked={values.thursChecked}
                      id="thursChecked"
                      name="thursChecked"
                      onChange={handleChange}
                    />
                    <Box component={Typography}>Thurs</Box>
                  </Box>
                  <Box sx={classes.availabilityDayWrapper}>
                    <Box
                      disabled={!values.isAvailable}
                      component={Checkbox}
                      checked={values.friChecked}
                      id="friChecked"
                      name="friChecked"
                      onChange={handleChange}
                    />
                    <Box component={Typography}>Fri</Box>
                  </Box>
                  <Box sx={classes.availabilityDayWrapper}>
                    <Box
                      disabled={!values.isAvailable}
                      component={Checkbox}
                      checked={values.satChecked}
                      id="satChecked"
                      name="satChecked"
                      onChange={handleChange}
                    />
                    <Box component={Typography}>Sat</Box>
                  </Box>
                  <Box sx={classes.availabilityDayWrapper}>
                    <Box
                      disabled={!values.isAvailable}
                      component={Checkbox}
                      checked={values.sunChecked}
                      id="sunChecked"
                      name="sunChecked"
                      onChange={handleChange}
                    />
                    <Box component={Typography}>Sun</Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={classes.fields}
                component={TextField}
                variant="outlined"
                name="price"
                id="price"
                type="number"
                label={<Box component={Typography}>Price</Box>}
                fullWidth
                autoFocus
                helperText={touched.price ? errors.price : ""}
                error={touched.price && Boolean(errors.price)}
                value={values.price}
                onChange={handleChange}
              />
              <Button sx={classes.button} variant="contained" type="submit">
                {isSubmitting ? (
                  <CircularProgress style={{ color: "white" }} />
                ) : (
                  "Save"
                )}
              </Button>
            </Box>
          </Modal>
        )}
      </Formik>
    );
  }
);

export default SitterModal;
