import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const message: SxProps<Theme> = {
  maxWidth: 400,
  ml: 2,
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
