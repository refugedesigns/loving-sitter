import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import Search from "./pages/Home/Search/Search";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import { Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useAutoLogout } from "./helpers/hooks/useAutoLogout";
import SitterModal from "./components/UI/SitterModal/SitterModal";
import { Availability } from "./interface/Availability";
import registerSitter from "./helpers/APICalls/register-sitter";
import { addUser } from "./store/usersSlice";
import { useAppDispatch } from "./store/hooks";
const Login = React.lazy(() => import("./pages/Login/Login"));
const Signup = React.lazy(() => import("./pages/Signup/Signup"));
const Listings = React.lazy(() => import("./pages/Listings/Listings"));
const SitterDetail = React.lazy(
  () => import("./pages/SitterDetail/SitterDetail")
);
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const Messages = React.lazy(() => import("./pages/Messages/Messages"));

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
        console.log(error);
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
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <Search handleOpenModal={handleOpenModal} />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <Signup />
            </React.Suspense>
          }
        />
        <Route
          path="/dogsitters"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <Listings handleOpenModal={handleOpenModal} />
            </React.Suspense>
          }
        />
        <Route
          path="/dogsitters/:id"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <SitterDetail handleOpenModal={handleOpenModal} />
            </React.Suspense>
          }
        />
        <Route
          path="/profile/*"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <ProtectedRoutes>
                <Profile handleOpenModal={handleOpenModal} />
              </ProtectedRoutes>
            </React.Suspense>
          }
        />
        <Route
          path="/messages/*"
          element={
            <React.Suspense fallback={<CircularProgress />}>
              <ProtectedRoutes>
                <Messages handleOpenModal={handleOpenModal} />
              </ProtectedRoutes>
            </React.Suspense>
          }
        />
        <Route path="*" element={<Box component="p">No page found!</Box>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
