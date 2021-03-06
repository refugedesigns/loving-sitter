import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const card: SxProps<Theme> = {
  my: 4,
  maxWidth: 500,
  px: 4,
  py: 2,
  borderRadius: 7,
  boxShadow: 3
}

export const time: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  fontSize: '14px'
}