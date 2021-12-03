import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const cardWrapper: SxProps<Theme> = {
  py: 10,
  px: 5
}

export const formWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  position: "relative"
};

export const addCoverImageIcon: SxProps<Theme> = {
  height: 40,
  width: 40,
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%)",
  color: "#fff",
  opacity: "80%",
};
export const addAvatarImageIcon: SxProps<Theme> = {
  height: 40,
  width: 40,
  position: "absolute",
  top: {xs: "55%", sm: "60%", md: "70%", lg: "65%"},
  left: "50%",
  transform: "translate(-50%)",
  color: "#fff",
  opacity: "80%"
}

export const coverImage: SxProps<Theme> = {
  width: "100%",
  cursor: "pointer"
}

export const avatar: SxProps<Theme> = {
  height: 120,
  width: 120,
  position: "absolute",
  bottom: 70,
  left: "50%",
  transform: "translate(-50%)",
  border: "5px solid #fff",
  cursor: "pointer"
}

export const text: SxProps<Theme> = {
  mt: 10,
  display: "flex",
  justifyContent: "center",
  color: "#c0c0c0",
  mx: "auto"
}
