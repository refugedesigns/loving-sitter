import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const allcards: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: { xs: "center" },
  justifyContent: { md: "center" },
};

export const mainCard: SxProps<Theme> = {
  width: {lg: 800},
  p: {xs: 4, md: 8},
  display: "flex",
  flexDirection: "column"
};

export const cardText: SxProps<Theme> = {
  ml: 1,
  mt: 8,
  mb: 4,
  color: "#c0c0c0",
  fontWeight: "bold",
  letterSpacing: "1px",
  textAlign: {xs: "center", lg: "left"},
  alignSelf: {xs: "center", lg: "start"}
}

export const button: SxProps<Theme> = {
  my: 4,
  height: 50,
  width: 180,
  whiteSpace: "nowrap",
  alignSelf: {xs: "center", md: "start"}
}
