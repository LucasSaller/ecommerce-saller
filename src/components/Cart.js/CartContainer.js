import React, { useState, useContext } from "react";
import CartItem from "../Cart.js/CartItem";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useCartContext } from "../../context/cartContext";

function CartContainer() {
  const { cart, addItem, removeItem, clearCart, isItemInCart } =
    useCartContext();
  console.log(cart);
  return (
    <Container>
      <Grid container>
        {cart.length > 0 ? (
          cart.map((cartItem, index) => {
            <CartItem />;
          })
        ) : (
          <Typography variant="subtitle1">Your cart is empty.</Typography>
        )}
      </Grid>
    </Container>
  );
}

export default CartContainer;
