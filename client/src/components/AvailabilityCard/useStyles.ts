import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const cardWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const dateRangeWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "start",
  ml: 6,
  my: 4
}

export const calendarIcon: SxProps<Theme> = {
  mr: 2,
  color: "primary.main"
}

export const availabilityText: SxProps<Theme> = {
  mt: 6,
  mb: 2
}

export const button: SxProps<Theme> = {
  height: 50,
  width: 120,
  my: 4
}
