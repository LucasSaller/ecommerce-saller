import React, { useState } from "react";
import CartItem from "../Cart.js/CartItem";
import { Button, Grid, Paper } from "@mui/material";
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
        <p>Your cart is empty.</p>
      )}
    </>
  );
}

export default CartContainer;
