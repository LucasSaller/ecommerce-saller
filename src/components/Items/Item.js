import React, { useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";
import { IconButton, Stack, Box, Snackbar, Alert } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useCartContext } from "../../context/cartContext";
import { useErrorContext } from "../../context/errorContext";
import ColorPreview from "../../utils/ColorPreview";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Slide from "@mui/material/Slide";

const ProductImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

function Item({ item }) {
  const { name, price, poster, colors, valueRating, quantity } = item;
  const [newValueRating, setNewValueRating] = useState(valueRating);

  const { addItem } = useCartContext();

  const { snackbar, setSnackbar } = useErrorContext();
  const onAdd = () => {
    addItem(item, 1);
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
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          variant="filled"
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
              onChange={(_, newValue) => {
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
