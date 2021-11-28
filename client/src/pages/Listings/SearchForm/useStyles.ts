import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const searchForm: SxProps<Theme> = {
  display: "flex",
  mt: 3,
} as const;

export const textInput: SxProps<Theme> = {
  flexGrow: 1,
  width: { md: 400 },
} as const;

export const dropIn: SxProps<Theme> = {
  width: 90,
} as const;
export const dropOff: SxProps<Theme> = {
  width: 90,
} as const;

export const resetButton: SxProps<Theme> = {
  textTransform: "capitalize",
  mx: 1,
} as const;
