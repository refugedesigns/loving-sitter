import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const mainWrapper: SxProps<Theme> = {
  border: "2px solid #c0c0c0",
  borderRadius: (theme) => theme.shape.borderRadius,
  padding: (theme) => theme.spacing(2),
};

export const subWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const dateSettingsWrapper: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const date: SxProps<Theme> = {
  fontWeight: "bold",
};

export const settingsIcon: SxProps<Theme> = {
  height: 40,
  width: 40,
  color: "#c0c0c0",
};

export const buttonWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center"
}

export const button: SxProps<Theme> = {
  ml: 2
}

export const pending: SxProps<Theme> = {
  color: "#c0c0c0"
}

export const userInfoWrapper: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
};

export const username: SxProps<Theme> = {
  fontWeight: "bold",
  ml: 1,
};
