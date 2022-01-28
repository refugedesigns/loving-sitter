import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";



export const chartBoxField: SxProps<Theme> = {
  overflowY: "auto",
  position: "absolute",
  top: 120,
  width: "100%",
  height: "calc(100% - 220px)"
};

export const otherUser: SxProps<Theme> = {
  alignSelf: "end",
  mx: 4,
};

export const activeUser: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  px: 4,
  borderRadius: 0,
  border: "none",
  boxShadow: 0,
  borderBottom: "1px solid #dcdcdc",
  position: "sticky",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: 20,
  height: 120
};

export const chartBox: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  position: "relative",

};

export const chartInput: SxProps<Theme> = {
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

export const chatInputWrapper: SxProps<Theme> = {
  position: "absolute",
  left: 0,
  bottom: 0,
  bgcolor: "white",
  width: "100%",
  height: 100
}