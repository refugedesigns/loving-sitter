import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import CSS from "csstype";
import { CSSObject } from "@emotion/react";

export const mainWrapper = {
  display: "flex",
  alignItems: "center",
  padding: "8px",
  paddingRight: "16px",
  paddingLeft: "16px",
  "&:hover": {
    backgroundColor: "#dfdfdf !important",
    cursor: "pointer",
  },
  textDecoration: "none",
} as const;

export const avatar: SxProps<Theme> = {
  height: 60,
  width: 60,
};

export const avatarWrapper: SxProps<Theme> = {
  position: "relative",
};

export const active: SxProps<Theme> = {
  color: "green",
  width: 15,
  height: 15,
  position: "absolute",
  left: 35,
  bottom: 0,
  border: "2px solid #fff",
  bgcolor: "green",
};

export const offline: SxProps<Theme> = {
  color: "gray",
  width: 15,
  height: 15,
  position: "absolute",
  left: 35,
  bottom: 0,
  border: "2px solid #fff",
  bgcolor: "gray",
};

export const username: SxProps<Theme> = {
  ml: 2,
  fontWeight: "bold",
  textDecoration: "none",
  color: "black",
};

export const activeLink = {
  display: "flex",
  alignItems: "center",
  padding: "8px",
  paddingLeft: "16px",
  paddingRight: "16px",
  [`:hover`]: {
    cursor: "pointer",
  },
  textDecoration: "none",
  bgcolor: "#dfdfdf",
} as const;


export const unreadMessages: SxProps<Theme> = {
  color: "green",
  width: 15,
  height: 15,
  left: 20,
  bottom: 0,
  border: "2px solid #fff",
  bgcolor: "green",
};