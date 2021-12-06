import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Search from "./pages/Home/Search/Search";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Listings from "./pages/Listings/Listings";
import SitterDetail from "./pages/SitterDetail/SitterDetail";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Profile />
    </ThemeProvider>
  );
}

export default App;
