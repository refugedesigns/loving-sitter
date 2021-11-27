import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Search from "./pages/Home/Search/Search";
import AuthHeader from "./components/AuthHeader/AuthHeader";
import Login from "./pages/Login/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
