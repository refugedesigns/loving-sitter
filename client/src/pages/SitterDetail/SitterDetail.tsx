import { Container, Box, CircularProgress, Typography } from "@mui/material";
import SitterDetailedCard from "../../components/SitterCard/SitterDetailedCard/SitterDetailedCard";
import { useEffect, useState } from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import { useCookiesLogin } from "../../helpers/hooks/loginWithCookies";
import fetchDogsitter from "../../helpers/APICalls/getDogsitter";
import { useLocation } from "react-router-dom";
import { AuthApiDataSuccess } from "../../interface/AuthApiData";
import { Review } from "../../interface/Review";
import postReview from "../../helpers/APICalls/post-review";
import openSocket from "socket.io-client";
import moment from "moment";
import { fetchRecipientConv } from "../../helpers/APICalls/conversations";
import { Conversation } from "../../interface/conversations";
import * as classes from "./useStyles";

interface Props {
  handleOpenModal: () => void;
}

const SitterDetail: React.FC<Props> = ({ handleOpenModal }) => {
  const [dogsitter, setDogsitter] = useState<AuthApiDataSuccess>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [availability, setAvailability] = useState<string[]>([]);
  const [reviews, setReviews] = useState<Array<Review>>();
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
        const days = [];
        for (const key in availability) {
          let day = availability[key];
          if (day === true) {
            const formatedDay = moment().day(key).format("ddd");
            days.push(formatedDay);
          }
        }
        setAvailability(days);
        setReviews(data.success.user.reviews?.reverse());
        setError(false);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    });
    const socket = openSocket(process.env.REACT_APP_SOCKET as string, {
      withCredentials: true,
    });

    socket?.on("review", (data) => {
      setReviews((prevReviews) => {
        let reviews = prevReviews || [];
        const updatedPreviews: Review[] = [...reviews];
        updatedPreviews.unshift(data.review as Review);
        return updatedPreviews;
      });
    });

    return () => {
      setReviews([]);
    };
  }, []);

  const handleSubmit = ({
    rating,
    reviewText,
  }: {
    rating: number;
    reviewText: string;
  }) => {
    postReview(rating, reviewText, id).then((data) => {
      if (data.success) {
        // console.log(data.success);
      } else if (data.error) {
        console.error({ error: data.error.message });
      }
    });
  };
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
          <SitterDetailedCard
            _id={id}
            name={dogsitter?.user.name!}
            location={dogsitter?.user.city!}
            price={dogsitter?.user.price!}
            availability={availability}
            profilePhoto={dogsitter?.user.profilePhoto!}
            isAvailable={dogsitter?.user.isAvailable!}
            handleSubmit={handleSubmit}
            reviews={reviews}
          />
        </Container>
      )}
    </Box>
  );
};

export default SitterDetail;
