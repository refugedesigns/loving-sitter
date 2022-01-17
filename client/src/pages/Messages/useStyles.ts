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
};

export const sidebarWrapper: SxProps<Theme> = {
  width: 300,
  minHeight: "90vh",
  overflow: "auto",
  boxShadow: 0,
  borderRight: "1px solid #dcdcdc",
  borderLeft: "1px solid #dcdcdc"
};

export const activeChartBox: SxProps<Theme> = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
};

export const sidebarText: SxProps<Theme> = {
  p: 6,
  fontWeight: "bold",
  whiteSpace: "nowrap",
  border: "none",
  boxShadow: 0,
  borderBottom: "1px solid #dcdcdc"
};

export const activeUser: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  p: 4,
  py: 4.25,
  borderRadius: 0,
  border: "none",
  boxShadow: 0,
  borderBottom: "1px solid #dcdcdc",
};

export const chartBox: SxProps<Theme> = {
  flex: 1,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column"
};

export const chartInput: SxProps<Theme> = {
  // height: "20%",
  flexShrink: 0,
};

export const formWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  py: 2,
  borderTop: "1px solid #dcdcdc",
};

export const form: SxProps<Theme> = {
  width: "90%",
  [`& fieldset`]: {
    border: "none",
  },
};

export const button: SxProps<Theme> = {
  height: 50,
  width: 120,
  mx: 4,
};

export const otherUser: SxProps<Theme> = {
  alignSelf: 'end',
  mx: 4
}
