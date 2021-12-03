import { createTheme } from "@mui/material/styles";

const theme = {
  palette: {
    primary: {
      main: "#f14140",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial"'
  },
  shape: {
    borderRadius: 4
  },
} as const;

type CustomTheme = {
  [Key in keyof typeof theme]: typeof theme[Key]
}

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme { }
  interface ThemeOptions extends CustomTheme { }
}

export default createTheme(theme)
