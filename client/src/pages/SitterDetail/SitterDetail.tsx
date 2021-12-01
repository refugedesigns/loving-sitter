import { Container, Box } from "@mui/material";
import SitterDetailedCard from "../../components/SitterCard/SitterDetailedCard/SitterDetailedCard";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import * as classes from "./useStyles";
const SitterDetail = () => {
  return (
    <Box>
      <AuthHeader />
      <Container sx={classes.pageWrapper} maxWidth="xl">
        <SitterDetailedCard />
      </Container>
    </Box>
  );
};

export default SitterDetail;
