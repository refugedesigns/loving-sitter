import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const mainWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center"
}

export const avatar: SxProps<Theme> = {
  height: 60,
  width: 60
}

export const avatarWrapper: SxProps<Theme> = {
  position: "relative",
}

export const active: SxProps<Theme> = {
  color: "green",
  width: 15,
  height: 15,
  position: "absolute",
  left: 35,
  bottom: 0,
  border: "2px solid #fff",
  bgcolor: 'green'
}
export const offline: SxProps<Theme> = {
  color: "gray",
  width: 15,
  height: 15,
  position: "absolute",
  left: 35,
  bottom: 0,
  border: "2px solid #fff",
  bgcolor: 'gray'
}

export const username: SxProps<Theme> ={
  ml: 2,
  fontWeight: "bold"
}
