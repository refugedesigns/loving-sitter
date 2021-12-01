import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const authWrapper: SxProps<Theme> = {
  boxShadow: { xs: 0, md: 5 },
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: 90,
  px: { xs: 2, md: 5, lg: 10 },
  bgcolor: "#fff"
} as const;

export const mobileToggle: SxProps<Theme> = {
  display: {
    xs: "inline-flex",
    md: "none",
  },
} as const;

export const desktopButtons: SxProps<Theme> = {
  display: { xs: "none", md: "inline-flex" },
} as const;

export const logoImage: SxProps<Theme> = {
  cursor: "pointer",
  borderRadius: 0,
} as const;

export const sitterText: SxProps<Theme> = {
  color: "black",
  textTransform: "capitalize",
  fontWeight: "bold",
  mx: 1,
  letterSpacing: "1px",
  [`:hover`]: {
    textDecoration: "underline",
  },
} as const;

export const loginButton: SxProps<Theme> = {
  height: 50,
  width: 120,
  whiteSpace: "nowrap",
  letterSpacing: "1px",
  mx: 3,
} as const;

export const signUpButton: SxProps<Theme> = {
  height: 50,
  width: 120,
  whiteSpace: "nowrap",
  letterSpacing: "1px",
} as const;

export const avatar: SxProps<Theme> = {
  mx: 1,
  cursor: "pointer",
} as const;
