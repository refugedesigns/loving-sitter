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
