import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Search from "./pages/Home/Search/Search";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Search />
    </ThemeProvider>
  );
}

export default App;
