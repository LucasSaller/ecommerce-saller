import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles, styled } from "@mui/styles";
import { IconButton, Stack, Box } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { useHistory } from "react-router-dom";
import ColorPreview from "../../utils/ColorPreview";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const useStyles = makeStyles({
  productImage: {
    objectFit: "contain",
    height: "100%",
  },
  buttons: {
    justifyContent: "space-around",
  },
});

function Item({ item }) {
  const classes = useStyles();
  const { name, price, poster, colors, valueRating } = item;
  const [newValueRating, setNewValueRating] = useState(valueRating);
  const history = useHistory(); // habilitar history para redirección
  const redirectProduct = (item) => {
    history.push(`/item/${item.id}`);
  };
  return (
    <>
      <Card style={{ borderRadius: 19 }}>
        <Box sx={{ pt: "100%", position: "relative" }}>
          <ProductImgStyle alt={name} src={poster} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link to={`/item/${item.id}`}>
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Link>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ColorPreview colors={colors} />
            <Typography variant="subtitle1">{price}</Typography>
          </Stack>
          <div>
            <Rating
              name="simple-controlled"
              onChange={(newValue) => {
                setNewValueRating(newValue);
              }}
              value={newValueRating}
              style={{ zIndex: 20 }}
            />
          </div>
          <IconButton edge="end">
            <ShoppingBasketIcon color="primary" />
          </IconButton>
        </Stack>
      </Card>
    </>
  );
}

export default Item;
