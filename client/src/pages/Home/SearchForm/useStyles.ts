import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const searchInputLabel: SxProps<Theme> = {
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "black",
  letterSpacing: "1px",
} as const;

export const searchBox: SxProps<Theme> = {
  margin: "2rem 0",
} as const;

export const dateText: SxProps<Theme> = {
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "black",
  fontWeight: "bold",
} as const;

export const dropIn: SxProps<Theme> = {
  marginBottom: (theme) => theme.spacing(4),
  [`& fieldset`]: {
    borderRadius: "5px 0px 0px 5px",
  },
  width: 200,
} as const;

export const dropOff: SxProps<Theme> = {
  marginBottom: (theme) => theme.spacing(4),
  [`& fieldset`]: {
    borderRadius: "0 5px 5px 0",
  },
  width: 200,
} as const;

export const submit: SxProps<Theme> = {
  height: 50,
  width: { xs: "100%", md: 260 },
  fontWeight: "500",
  letterSpacing: "1px",
  textAlign: "center",
} as const;
