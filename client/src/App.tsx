import React, { useEffect, useState } from "react";
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
import { useAutoLogout } from "./helpers/hooks/useAutoLogout";
import SitterModal from "./components/UI/SitterModal/SitterModal";
import { Availability } from "./interface/Availability";
import registerSitter from "./helpers/APICalls/register-sitter";
import { addUser } from "./store/usersSlice";
import { useAppDispatch } from "./store/hooks";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const { logout: setAutoLogout } = useAutoLogout();
  const dispatch = useAppDispatch();

  const handleSubmit = ({
    isAvailable,
    monChecked,
    tuesChecked,
    wedChecked,
    thursChecked,
    friChecked,
    satChecked,
    sunChecked,
    price,
  }: {
    isAvailable: boolean;
    monChecked: boolean;
    tuesChecked: boolean;
    wedChecked: boolean;
    thursChecked: boolean;
    friChecked: boolean;
    satChecked: boolean;
    sunChecked: boolean;
    price: number;
  }) => {
    const availabilityDays: Availability = {
      monday: monChecked,
      tuesday: tuesChecked,
      wednesday: wedChecked,
      thursday: thursChecked,
      friday: friChecked,
      saturday: satChecked,
      sunday: sunChecked,
    };

    registerSitter(isAvailable, availabilityDays, price)
      .then((data) => {
        if (data.success) {
          console.log(data.success);
          dispatch(
            addUser({
              _id: data.success.user._id,
              name: data.success.user.name,
              email: data.success.user.email,
              isDogsitter: data.success.user.isDogsitter,
              isAvailable: data.success.user.isAvailable,
              availability: data.success.user.availability,
              profilePhoto: data.success.user.profilePhoto,
              price: data.success.user.price,
            })
          );
          setOpenModal(false);
        } else {
          console.error({ error: data.error?.message });
        }
      })
      .catch((error) => {
        console.log(error)
        console.error({ error: "Unexpected error! please try again." });
      });
  };

  useEffect(() => {
    setAutoLogout();
  }, [setAutoLogout]);

  return (
    <ThemeProvider theme={theme}>
      <SitterModal
        open={openModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
      />
      <Routes>
        <Route
          path="/"
          element={<Search handleOpenModal={handleOpenModal} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dogsitters"
          element={<Listings handleOpenModal={handleOpenModal} />}
        />
        <Route
          path="/dogsitters/:id"
          element={<SitterDetail handleOpenModal={handleOpenModal} />}
        />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoutes>
              <Profile handleOpenModal={handleOpenModal} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/messages"
          element={
            <ProtectedRoutes>
              <Messages handleOpenModal={handleOpenModal} />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<Box component="p">No page found!</Box>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
