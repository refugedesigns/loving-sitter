import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const pageWrapper: SxProps<Theme> = {
  overflow: "hidden",
  maxHeight: "100vh",
};

export const mainWrapper: SxProps<Theme> = {
  display: "flex",
  m: "0 auto",
  borderRight: "1px solid #dcdcdc",
  height: "calc(100vh - 90px)",
  position: "relative",
};

export const sidebarWrapper: SxProps<Theme> = {
  height: "100%",
  boxShadow: 0,
  borderRight: "1px solid #dcdcdc",
  borderLeft: "1px solid #dcdcdc",
  position: "absolute",
  top: 0,
  left: 0,
  width: "30%",
  zIndex: 10,
  bgcolor: "white",
};

export const activeChartBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "absolute",
  top: 0,
  left: "30%",
  width: "70%",
};

export const sidebarText: SxProps<Theme> = {
  whiteSpace: "nowrap",
  border: "none",
  boxShadow: 0,
  borderBottom: "1px solid #dcdcdc",
  position: "sticky",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 20,
  height: 120,
};

export const sidebarDiv: SxProps<Theme> = {
  position: "relative",
  height: "100%",
};

export const convWrapper: SxProps<Theme> = {
  position: "absolute",
  height: "calc(100% - 120px)",
  top: 120,
  overflowY: "auto",
  overflowX: "hidden",
  width: "100%",
};
