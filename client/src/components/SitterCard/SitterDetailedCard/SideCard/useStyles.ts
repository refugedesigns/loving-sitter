import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const cardWrapper: SxProps<Theme> = {
  p: 4,
  my: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: { sm: 500}
} as const;

export const price: SxProps<Theme> = {
  fontWeight: "bold",
} as const;

export const starsWrapper: SxProps<Theme> = {
  my: 2,
} as const;

export const stars: SxProps<Theme> = {
  color: "#c0c0c0",
} as const;

export const dropOffWrapper: SxProps<Theme> = {
  my: 5,
} as const;

export const timePicker: SxProps<Theme> = {
  width: 120,
} as const;

export const messageButton: SxProps<Theme> = {
  my: 2,
  height: 50,
  width: 180,
} as const;

export const requestButton: SxProps<Theme> = {
  height: 50,
  width: 180,
} as const;
