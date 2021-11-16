import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { makeStyles, styled } from "@mui/styles";
import { IconButton, Stack, Box, Snackbar, Alert } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useCartContext } from "../../context/cartContext";
import { useErrorContext } from "../../context/errorContext";
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
  const { name, price, poster, colors, valueRating, quantity } = item;
  const [newValueRating, setNewValueRating] = useState(valueRating);

  const { cart, addItem, removeItem, clearCart, isItemInCart } =
    useCartContext();

  const { snackbar, setSnackbar } = useErrorContext();
  const onAdd = (result) => {
    addItem(item, quantity);
    setSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };
  return (
    <>
      <Snackbar
        open={snackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Succesfully added to cart!
        </Alert>
      </Snackbar>
      <Card elevation={4} style={{ borderRadius: 19 }}>
        <Box sx={{ pt: "100%", position: "relative" }}>
          <ProductImgStyle alt={name} src={poster} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Link to={`/item/${item.id}`}>
            <Typography
              variant="subtitle2"
              noWrap
              style={{ fontWeight: "bold" }}
            >
              {name}
            </Typography>
          </Link>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <ColorPreview colors={colors} />
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              ${price}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Rating
              name="simple-controlled"
              onChange={(event, newValue) => {
                setNewValueRating(newValue);
              }}
              value={newValueRating}
              style={{ zIndex: 20 }}
            />
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Qt: {quantity}
            </Typography>
          </Stack>
          <IconButton style={{ width: "fit-content" }} onClick={() => onAdd()}>
            <ShoppingBasketIcon color="primary" />
          </IconButton>
        </Stack>
      </Card>
    </>
  );
}

export default Item;
