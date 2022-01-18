import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const message: SxProps<Theme> = {
  maxWidth: 400,
  m: 2,
  px: 4,
  py: 2,
  borderRadius: 7,
  boxShadow: 0,
  bgcolor: "#c4c3d0",
};

export const mainWrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: "center",
  mx: 4
}

export const time: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  fontSize: "14px"
}