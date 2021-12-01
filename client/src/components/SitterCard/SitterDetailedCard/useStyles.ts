import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const mainCardWrapper: SxProps<Theme> = {} as const;

export const subCardWrapper: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  maxWidth: { sm: 500, lg: 900 },
} as const;

export const imageWrapper: SxProps<Theme> = {
  height: 240,
  width: "100%",
} as const;

export const avatarWrapper: SxProps<Theme> = {
  border: "5px solid white",
  height: 120,
  width: 120,
  position: "absolute",
  top: 180,
  left: "50%",
  transform: "translate(-50% )",
} as const;

export const userInfoWrapper: SxProps<Theme> = {
  mt: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
} as const;

export const availability: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
} as const;

export const days: SxProps<Theme> = {
  ml: 1,
} as const;

export const locationWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  my: 2,
} as const;

export const locationIcon: SxProps<Theme> = {
  height: 30,
  width: 30,
  color: "primary.main",
} as const;

export const textStyles: SxProps<Theme> = {
  color: "#c0c0c0",
} as const;

export const about: SxProps<Theme> = {
  fontWeight: "bold",
} as const;

export const ratingsWrapper: SxProps<Theme> = {
  my: 4,
} as const;

export const ratings: SxProps<Theme> = {
  fontWeight: "bold",
  textDecoration: "underline",
  [`:hover`]: {
    cursor: "pointer",
  },
} as const;

export const buttonsWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  my: 4,
} as const;

export const reviewUserWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
} as const;

export const reviewUsername: SxProps<Theme> = {
  fontWeight: "bold",
  ml: 2,
} as const;

export const starsWrapper: SxProps<Theme> = {
  my: 2,
  display: "flex",
} as const;

export const stars: SxProps<Theme> = {
  color: "#c0c0c0",
  ml: 1,
} as const;

export const lowerSectionWrapper: SxProps<Theme> = {
  p: 4,
} as const;
