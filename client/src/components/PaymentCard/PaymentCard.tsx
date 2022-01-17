import { Card, Typography, Box, Button } from "@mui/material";
import CreditCard from "./CreditCard/CreditCard";
import * as classes from "./useStyles";

const PaymentCard = () => {
  return (
    <Card sx={classes.mainCard} raised>
      <Box component={Typography} variant="h4" textAlign="center">
        Payment Methods
      </Box>
      <Box>
        <Box sx={classes.cardText} component={Typography} variant="h6">
          Saved payment profiles:
        </Box>
        <Box sx={classes.allcards}>
          <CreditCard type="mastercard" />
          <CreditCard type="visacard" />
        </Box>
      </Box>
      <Button sx={classes.button} variant="outlined">Add payment method</Button>
    </Card>
  );
};

export default PaymentCard;
