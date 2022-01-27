import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const searcWrapper: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  my: 10,
} as const;

export const resultText: SxProps<Theme> = {
  fontWeight: "bold"
}as const

export const dogsittersWrapper: SxProps<Theme> = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

export const dogsitterCard: SxProps<Theme> = {
  bgcolor: "red",
  alignSelf: "start"
}