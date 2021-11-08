import React, { useState, useContext } from "react";
import CartItem from "../Cart.js/CartItem";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useCartContext } from "../../context/cartContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function CartContainer() {
  const { cart, addItem, removeItem, clearCart, isItemInCart } =
    useCartContext();
  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <Link to="/">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <Typography variant="h4">Shopping Cart</Typography>
        <Grid container style={{ padding: 16 }}>
          <Grid item xs={12} md={2}>
            image
          </Grid>
          <Grid item xs={12} sm>
            Description
          </Grid>
          <Grid item xs={12} md={2}>
            Price
          </Grid>
        </Grid>
        {cart && cart.length > 0 ? (
          cart.map((cartItem, index) => {
            return (
              <Grid key={index} item xs={12} md={12}>
                <CartItem item={cartItem} />
              </Grid>
            );
          })
        ) : (
          <Typography variant="subtitle1">Your cart is empty.</Typography>
        )}
      </Grid>
      <Grid item xs={12} md={4}></Grid>

      {/* // {cart.length > 0 ? (
        //   cart.map((cartItem, index) => {
        //     return <CartItem key={index} item={cartItem} />;
        //   })
        // ) : (
        //   <Typography variant="subtitle1">Your cart is empty.</Typography>
        // )} */}
    </Grid>
  );
}

export default CartContainer;
