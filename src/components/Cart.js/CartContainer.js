import React, { useState, useEffect } from "react";
import CartItem from "../Cart.js/CartItem";
import { Button, Grid, IconButton, Typography, Container } from "@mui/material";
import { useCartContext } from "../../context/cartContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

function CartContainer() {
  const { cart, addItem, removeItem, clearCart, isItemInCart } =
    useCartContext();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const sumTotal = (cartList) => {
      return [...cartList]
        .map(function (cartItem) {
          return cartItem.price * cartItem.quantity;
        })
        .reduce(add, 0);
    };
    function add(accumulator, a) {
      return accumulator + a;
    }
    setTotal(sumTotal(cart));
  }, [cart]);

  return (
    <>
      <Link to="/">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Container>
        <Grid container padding="20px">
          <Grid item xs={12} md={10}>
            <Typography variant="h4" mb={5}>
              Shopping Cart
            </Typography>

            <Grid container spacing={1}>
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
          </Grid>
          <Grid item xs={12} md={10}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h4">Total: ${total}</Typography>
            </Box>
            {cart.length > 0 && (
              <Button m="20xp" onClick={() => clearCart()}>
                Remover Todos
              </Button>
            )}
            <Link to="/">
              <Button variant="outlined">Volver a comprar</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CartContainer;
