import React, { useState, useEffect } from "react";
import CartItem from "../Cart.js/CartItem";
import { Button, Grid, IconButton, Typography, Container } from "@mui/material";
import { useCartContext } from "../../context/cartContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Form from "./Form";
import { addDoc, updateDoc, collection } from "firebase/firestore";
import { getFirestore } from "../../firebase";
function CartContainer() {
  const { cart, clearCart } = useCartContext();
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

  const handleSubmit = (formData) => {
    const db = getFirestore();
    const orders = collection(db, "orders");
    const newOrder = {
      buyer: formData,
      items: [...cart],
      total,
      date: Date.now(),
    };
    addDoc(orders, newOrder).then(({ id }) => console.log(id));
  };

  return (
    <>
      <Link to="/">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Container>
        <Grid container padding={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" mb={5}>
              Shopping Cart
            </Typography>

            <Grid container spacing={0} py={2}>
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
            <Box display="flex" gap="20px">
              {cart.length > 0 && (
                <Button
                  style={{ marginRight: "auto" }}
                  onClick={() => clearCart()}
                >
                  Remover Todos
                </Button>
              )}
              <Link to="/">
                <Button variant="outlined">Volver a comprar</Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={10}>
            <Box my={5}>
              <Typography variant="h4">Total: ${total}</Typography>
              <Box py={4}>
                <Typography variant="h4">Order Details</Typography>

                <Form handleSubmit={handleSubmit} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CartContainer;
