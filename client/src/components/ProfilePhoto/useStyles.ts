import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const cardWrapper: SxProps<Theme> = {
  py: 10,
  px: 5
}

export const formWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};



export const avatar: SxProps<Theme> = {
  height: 150,
  width: 150,
  cursor: "pointer"
}

export const text: SxProps<Theme> = {
  mt: 4,
  display: "flex",
  justifyContent: "center",
  color: "#c0c0c0",
  mx: "auto"
}

export const mainButtonWrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: "column",
  alignItems: "center"
}



export const fileUploadButton: SxProps<Theme> = {
  my: 4,
  height: 50,
  width: 260
}

export const cancelButton: SxProps<Theme> = {
  height: 50,
  width: 260,
};
