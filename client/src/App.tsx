import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Search from "./pages/Home/Search/Search";
import AuthHeader from "./components/AuthHeader/AuthHeader";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup"
import Listings from "./pages/Listings/Listings"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Listings />
    </ThemeProvider>
  );
}

export default App;
