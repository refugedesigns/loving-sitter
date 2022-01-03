import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";


export const style: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const availableText: SxProps<Theme> = {
  textTransform: "uppercase",
  fontWeight: "bold",
  mr: 2,
};

export const availableWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  my: 2,
};

export const availabilityDayWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const availabilityDaysWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
};

export const availabilty: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  my: 2,
};

export const fields: SxProps<Theme> = {
  mb: 5,
};

export const button: SxProps<Theme> = {
  height: 50,
  width: 180,
};