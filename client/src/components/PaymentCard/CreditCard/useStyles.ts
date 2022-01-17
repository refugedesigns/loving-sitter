import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const image: SxProps<Theme> = {
  width: 75,
  height: 50
}

export const ccWrapper: SxProps<Theme> = {
  border: "1px solid #dcdcdc",
  width: 380,
  px:4,
  py: 2,
  borderRadius: (theme) => theme.shape.borderRadius,
  cursor: "pointer",
  my: 2,
  mx: 1
}

export const imageWrapper: SxProps<Theme> = {
  display: 'flex',
  justifyContent: "space-between",
}

export const  cardNumber: SxProps<Theme> = {
  fontWeight: "bold",
  mt: 3,
  mb: 2
}

export const name: SxProps<Theme> = {
  mt: 1,
  fontWeight: "bold"
}

export const expireDate: SxProps<Theme> = {
  color: "#c0c0c0",
  fontWeight: "bold"
}
