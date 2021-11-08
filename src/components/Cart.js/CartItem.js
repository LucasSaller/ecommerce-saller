import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Button, Grid, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import ItemCount from "../ItemCount/ItemCount";
import producto from "../../assets/producto1.jpeg";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { useCartContext } from "../../context/cartContext";

import "./Cart.css";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
function CartItem({ item }) {
  const { name, price, poster, colors, valueRating, stock, id } = item;
  const { cart, addItem, removeItem, clearCart, isItemInCart } =
    useCartContext();
  return (
    <>
      <div className="cart__container">
        <Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }} elevation={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="complex" src={poster} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {id}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              display="flex"
              justifyContent="space-between"
              flexDirection="row"
              xs={12}
              md={2}
              alignItems="center"
            >
              <Typography
                variant="subtitle1"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                ${price}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                style={{ fontWeight: "bold" }}
              >
                {stock}
              </Typography>
              <IconButton onClick={() => removeItem(id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
        <Divider />
      </div>
    </>
  );
}

export default CartItem;
