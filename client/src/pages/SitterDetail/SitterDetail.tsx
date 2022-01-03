import { Container, Box, CircularProgress, Typography } from "@mui/material";
import SitterDetailedCard from "../../components/SitterCard/SitterDetailedCard/SitterDetailedCard";
import { useEffect, useState } from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { useCookiesLogin } from "../../helpers/hooks/loginWithCookies";
import fetchDogsitter from "../../helpers/APICalls/getDogsitter";
import { useLocation } from "react-router-dom";
import { AuthApiDataSuccess } from "../../interface/AuthApiData";
import moment from "moment";
import * as classes from "./useStyles";


interface Props {
  handleOpenModal: () => void;
}

const SitterDetail: React.FC<Props> = ({ handleOpenModal }) => {
  const [dogsitter, setDogsitter] = useState<AuthApiDataSuccess>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [availability, setAvailability] = useState<string[]>([]);
  const { cookiesLogin: loadUser } = useCookiesLogin();
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    setIsLoading(true);
    loadUser();
    fetchDogsitter(id).then((data) => {
      if (data.success) {
        setDogsitter(data.success);
        let availability = data.success.user.availability;
        const days = []
        for (const key in availability) {
          let day = availability[key];
          if (day === true) {
            const formatedDay = moment().day(key).format("ddd");
            days.push(formatedDay)
          }
        }
        setAvailability(days)
        setError(false);
        setIsLoading(false);
      } else if (data.error) {
        setError(true);
        setIsLoading(false);
      }
    });
  }, []);
  return (
    <Box>
      <AuthHeader handleOpenModal={handleOpenModal} />
      {isLoading ? (
        <Container maxWidth="xl">
          <CircularProgress style={{ color: "primary.main" }} />
        </Container>
      ) : error ? (
        <Container>
          <Box component={Typography}> 404 </Box>
        </Container>
      ) : (
        <Container sx={classes.pageWrapper} maxWidth="xl">
          <SitterDetailedCard name={dogsitter?.user.name!} location={dogsitter?.user.city!} price={dogsitter?.user.price!} availability={availability} profilePhoto={dogsitter?.user.profilePhoto!}  />
        </Container>
      )}
    </Box>
  );
};

export default SitterDetail;
