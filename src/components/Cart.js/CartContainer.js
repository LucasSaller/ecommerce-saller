import React, { useState } from "react";
import CartItem from "../Cart.js/CartItem";
import { Button, Grid, Paper, Typography } from "@mui/material";
function CartContainer() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      {cartItems.length !== 0 ? (
        <Grid container>
          <Button fullWidth variant="outlined" style={{ margin: 10 }}>
            Checkout
          </Button>
        </Grid>
      ) : (
        <Typography variant="subtitle1">Your cart is empty.</Typography>
      )}
    </>
  );
}

export default CartContainer;
