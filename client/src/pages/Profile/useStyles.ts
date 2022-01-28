import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const containerWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  justifyContent: { lg: "center" },
  alignItems: { xs: "center", lg: "start" },
  my: { xs: 5, lg: 10 },
};

export const componentWrapper: SxProps<Theme> = {
  ml: { lg: 20 },
  width: "100%",
  maxWidth: { sm: "80%", lg: "60%" },
  flexGrow: 1,
  mt: { xs: 5, lg: 0 },
};

export const linkItem = {
  my: 2,
  cursor: "pointer",
  color: "#c0c0c0",
  mx: { xs: 1 },
  whiteSpace: "nowrap",
  fontSize: { lg: "1.5rem" },
  textDecoration: "none",
  [`&:active`]: {
    color: "black",
  },
  [`:hover`]: {
    color: "black",
  },
  [`:focus`]: {
    color: "black",
  },
} as const;

export const activate: SxProps<Theme> = {
  my: 2,
  cursor: "pointer",
  color: "black",
  mx: { xs: 1 },
  whiteSpace: "nowrap",
  fontSize: { lg: "1.5rem" },
  textDecoration: "none",
};

export const items = {
  display: "flex",
  justifyContent: { xs: "center", lg: "flex-start" },
  flexDirection: { xs: "row", lg: "column" },
  overflow: { xs: "auto", md: "hidden" },
  [`::-webkit-scrollbar`]: {
    display: "none",
  },
} as const;

export const active: SxProps<Theme> = {
  color: "black",
};
