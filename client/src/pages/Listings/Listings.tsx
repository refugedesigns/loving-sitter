import { useEffect, useState } from "react";
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
import { User } from "../../interface/User";

interface Props {
  handleOpenModal: () => void;
}

const Listings: React.FC<Props> = ({ handleOpenModal }) => {
  const [dogsitters, setDogsitters] = useState<User[] | undefined>([]);
  const { cookiesLogin: loadUser } = useCookiesLogin();

  useEffect(() => {
    loadUser();

    fetchDogsitters()
      .then((data) => {
        setDogsitters(data.success);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(dogsitters)
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
