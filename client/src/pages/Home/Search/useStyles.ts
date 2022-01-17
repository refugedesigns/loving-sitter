import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Image from "../../../images/homepage-dog.png";

export const logo: SxProps<Theme> = {
  borderRadius: 0,
  ml: { xs: 2, sm: 5 },
  cursor: "pointer",
} as const;

export const logoMenuWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
} as const;

export const menuIcon: SxProps<Theme> = {
  mr: { xs: 2, sm: 5 },
  display: { xs: "inline-flex", md: "none" },
} as const;

export const mainText: SxProps<Theme> = {
  margin: "2rem 0",
  fontWeight: "800",
  textAlign: "center",
  fontSize: "3rem",
} as const;

export const root: SxProps<Theme> = {
  minHeight: "100vh",
} as const;

export const wrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  marginTop: 5,
} as const;

export const bgImage: SxProps<Theme> = {
  backgroundImage: `url(${Image})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  display: { xs: "none", md: "block" },
} as const;

export const buttonsWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  pr: { md: 4, lg: 8 },
  pt: 4,
} as const;

export const signUpButton: SxProps<Theme> = {
  height: 50,
  width: 120,
  whiteSpace: "nowrap",
  letterSpacing: "1px",
} as const;

export const loginButton: SxProps<Theme> = {
  height: 50,
  width: 120,
  whiteSpace: "nowrap",
  letterSpacing: "1px",
  mr: 2,
  ml: 5,
  color: "#fff",
  border: "1px solid #fff",
} as const;

export const  link: SxProps<Theme> ={
  color: "#fff",
  textDecoration: "none"
}

export const sitterLink: SxProps<Theme> = {
  color: "#fff",
  height: 50,
  textDecoration: "underline",
  whiteSpace: "nowrap",
  ml: 2,
} as const;
