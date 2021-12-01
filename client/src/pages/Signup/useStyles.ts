import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const formWrapper = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  alignItems: "center",
  height: { md: 650 },
  boxShadow: { md: 5 },
  p: { md: 6 },
  pt: { md: 8 },
  borderRadius: { md: 2 },
  mt: 10,
  maxWidth: { xs: 500, md: 700 },
  mx: "auto",
  bgcolor: { md: "#fff" },
} as const;

export const mainWrapper = {
  minHeight: "100vh",
  minWidth: "100vw",
  background: { md: "#fafafb" },
} as const;
