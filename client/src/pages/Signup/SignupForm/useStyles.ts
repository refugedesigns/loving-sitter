import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const button = {
  height: 50,
  width: 180,
  mx: 2,
} as const;

export const formWrapper = {
  width: "90%",
} as const;

export const buttonWrapper = {
  display: "flex",
  justifyContent: "center",
  mt: 4,
} as const;

export const emailWrapper = {
  my: 3,
} as const;

export const emailText = {
  textTransform: "uppercase",
  lineSpacing: "1px",
  fontWeight: "bold",
  color: "black",
} as const;

export const passwordText = {
  textTransform: "uppercase",
  lineSpacing: "1px",
  fontWeight: "bold",
  color: "black",
} as const;

export const signUpLink = {
  textAlign: "center",
  fontWeight: "bold",
  mt: 4,
} as const;

export const signUpButton = {
  ml: 1,
  color: "primary.main",
  textDecoration: "underline",
  [`:hover`]: {
    cursor: "pointer",
    textDecoration: "none",
  },
} as const;
