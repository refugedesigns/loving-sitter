import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CircleOutlined, CheckCircle } from "@mui/icons-material";
import mastercard from "../../../images/mastercard.png";
import visacard from "../../../images/visa.png";
import { CC } from "../../../interface/Card";
import * as classes from "./useStyles";

interface Props {
  type: CC;
}

const CreditCard: React.FC<Props> = ({ type }) => {
  const [selectCard, setSelectCard] = useState<boolean>(false);
  return (
    <Box sx={classes.ccWrapper}>
      <Box sx={classes.imageWrapper}>
        <Box
          sx={classes.image}
          component="img"
          src={type === "mastercard" ? mastercard : visacard}
        />
        {selectCard ? (
          <Box component={CheckCircle} />
        ) : (
          <Box component={CircleOutlined} />
        )}
      </Box>
      <Box sx={classes.cardNumber} component={Typography}>
        **** **** **** 2445
      </Box>
      <Box sx={classes.expireDate} component={Typography}>
        Exp. Date 09/27
      </Box>
      <Box sx={classes.name} component={Typography}>
        John Doe
      </Box>
    </Box>
  );
};

export default CreditCard;
