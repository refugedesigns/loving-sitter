import { useEffect, useState, useRef } from "react";
import {
  Typography,
  Box,
  Container,
  CircularProgress,
  Grid,
} from "@mui/material";
import { CssBaseline } from "@mui/material";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import SearchForm from "./SearchForm/SearchForm";
import SitterCard from "../../components/SitterCard/SitterCard";
import * as classes from "./useStyles";
import { useCookiesLogin } from "../../helpers/hooks/loginWithCookies";
import fetchDogsitters from "../../helpers/APICalls/getAllDogsitters";
import { useAppSelector } from "../../store/hooks";
import openSocket, { Socket } from "socket.io-client";
import { User } from "../../interface/User";

interface Props {
  handleOpenModal: () => void;
}

const Listings: React.FC<Props> = ({ handleOpenModal }) => {
  const [dogsitters, setDogsitters] = useState<User[] | undefined>([]);
  const { cookiesLogin: loadUser } = useCookiesLogin();
  const loggedInUser = useAppSelector((state) => state.users);
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = openSocket(process.env.REACT_APP_SOCKET as string, {
      withCredentials: true,
    });
  },[])
  

  useEffect(() => {
    loadUser();

     loggedInUser._id !== "" &&
       socket.current?.emit("addUser", loggedInUser._id);

    fetchDogsitters()
      .then((data) => {
        setDogsitters(data.success);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <AuthHeader handleOpenModal={handleOpenModal} />
      <Box sx={classes.searcWrapper}>
        <Box sx={classes.resultText} variant="h4" component={Typography}>
          Your search results
        </Box>
        <SearchForm />
      </Box>
      <Container sx={classes.dogsittersWrapper} maxWidth="xl">
        {dogsitters?.map((dogsitter) => (
          <SitterCard
            key={dogsitter._id}
            name={dogsitter.name}
            profilePhoto={dogsitter.profilePhoto!}
            location={dogsitter.city!}
            price={dogsitter.price!}
            id={dogsitter._id}
            reviews={dogsitter.reviews}
          />
        ))}
      </Container>
    </>
  );
};

export default Listings;
