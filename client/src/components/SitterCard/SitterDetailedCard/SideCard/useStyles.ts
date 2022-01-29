import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import { CSSProperties } from "@mui/styles";

export const cardWrapper: SxProps<Theme> = {
  p: 4,
  my: { xs: 5, sm: 0 },
  marginTop: { sm: 5, lg: 0 },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  ml: { md: 5 },
  width: "100%",
  maxWidth: { sm: 400 },
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
  my: 2,
} as const;

export const timePicker: SxProps<Theme> = {
  mt: 2,
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

export const form: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

export const dateField: SxProps<Theme> = {
  marginBottom: "10px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

export const dropinField: SxProps<Theme> = {
  width: "100%",
  my: 2,
  display: "flex",
  flexDirection: "column",
};
export const dropoffField: SxProps<Theme> = {
  width: "100%",
  mb: 4,
  display: "flex",
  flexDirection: "column",
};
