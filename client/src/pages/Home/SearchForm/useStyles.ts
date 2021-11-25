import { Theme } from "@mui/material/styles";

export const searchInputLabel = {
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "black",
  letterSpacing: "1px",
} as const;

export const searchBox = {
  margin: "2rem 0",
} as const;

export const dateText = {
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "black",
  fontWeight: "bold",
} as const;

export const dropIn = {
  marginBottom: (theme: Theme) => theme.spacing(4),
  [`& fieldset`]: {
    borderRadius: "5px 0px 0px 5px",
  },
  width: 200,
} as const;

export const dropOff = {
  marginBottom: (theme: Theme) => theme.spacing(4),
  [`& fieldset`]: {
    borderRadius: "0 5px 5px 0",
  },
  width: 200,
} as const;

export const submit = {
  height: 50,
  width: { xs: "100%", md: 260 },
  fontWeight: "500",
  letterSpacing: "1px",
  textAlign: "center",
} as const;
