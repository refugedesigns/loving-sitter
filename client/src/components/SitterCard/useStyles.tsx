import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
export const cardWrapper: SxProps<Theme> = {
  maxWidth: { xs: 400, md: 300 },
} as const;

export const userInfoWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "row", md: "column" },
  alignItems: { xs: "center" },
  px: {xs: 2},
  pt: {xs: 4, md: 5}
} as const;

export const avatar: SxProps<Theme> = {
  height: 90,
  width: 90,
  mb: {md: 2}
} as const;

export const textContent: SxProps<Theme> = {
  ml: {xs: 2, md: 0},
} as const;

export const title: SxProps<Theme> = {
  fontWeight: "bold",
  textAlign: {md: "center"}
} as const;

export const profession: SxProps<Theme> = {
  fontWeight: "bold",
  color: "#c0c0c0",
  letterSpacing: "1px",
  textAlign: {md: "center"}
} as const;

export const locationWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
} as const;

export const locationText: SxProps<Theme> = {
  fontWeight: "bold",
  letterSpacing: "1px",
  color: "#c0c0c0",
} as const;

export const locationIcon: SxProps<Theme> = {
  height: 30,
  width: 30,
  color: "primary.main"
}as const

export const price: SxProps<Theme> = {
  fontWeight: "bold",
  color: "black"
}as const

export const cardExcept: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  mt: 2,
  borderTop: "1px solid #d3d3d3",
  p: {xs: 2}
}as const

export const starWrapper: SxProps<Theme> = {
  display: { md: "flex"},
  justifyContent: {md: "center"},
  mt: {md: 2}
}as const

export const star: SxProps<Theme> = {
  color: "#c0c0c0", 
} as const;

export const bio: SxProps<Theme> = {
  textAlign: "center",
  my: 2
}as const
