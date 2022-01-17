import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const cardWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  py: 5,
  px: 10
};

export const fields: SxProps<Theme> = {
  mb: 5
}

export const button: SxProps<Theme> = {
  height: 50,
  width: 180
}

export const availableWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  mb: 2,
};

export const availableText: SxProps<Theme> = {
  textTransform:"uppercase",
  fontWeight: "bold",
  mr: 2,
}
export const availabilityDayWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center"
}

export const availabilityDaysWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap"
};

export const availabilty: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  mb: 2,
};