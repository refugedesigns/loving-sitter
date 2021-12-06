import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const cardWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: { md: "space-between" },
  alignItems: { xs: "center" },
  p: 4,
  border: "1px solid #dcdcdc",
};

export const dateWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const date: SxProps<Theme> = {
  ml: 2,
  whiteSpace: "nowrap",
  fontWeight: "bold",
};

export const timeWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  ml: { md: 2 },
  width: "100%",
  my: { xs: 2, md: 0 },
};

export const timeBox: SxProps<Theme> = {
  width: { md: 150 },
  flexGrow: { xs: 1 },
  ml: 2,
};

export const doubleTimeWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: { xs: "center" },
  justifyContent: { xs: "center" },
  width: "100%",
};

export const toText: SxProps<Theme> = {
  mr: { xs: 2.5, md: 0 },
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "black",
  fontSize: 14,
};

export const fromText: SxProps<Theme> = {
  textTransform: "uppercase",
  fontWeight: "bold",
  color: "black",
  fontSize: 14,
};
