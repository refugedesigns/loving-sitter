import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Search from "./pages/Home/Search/Search";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Listings from "./pages/Listings/Listings";
import SitterDetail from "./pages/SitterDetail/SitterDetail";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dogsitters" element={<Listings />} />
        <Route path="/dogsitters/:id" element={<SitterDetail />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoutes>
              <Messages />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<Box component="p">No page found!</Box>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
