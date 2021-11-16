import React, { useContext, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles, withStyles } from "@mui/styles";
import { Container, IconButton } from "@mui/material";
import ItemCount from "../../ItemCount/ItemCount";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Box, Card, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCartContext } from "../../../context/cartContext";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  productImage: {
    objectFit: "contain",
  },
  buttons: {
    justifyContent: "space-around",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ItemDetail({ item }) {
  const classes = useStyles();
  const [quantity2, setQuantity] = useState(null);
  const [itemCount, setItemCount] = useState(true);
  const { name, price, poster, stock, initial, quantity } = item;
  const { cart, addItem, removeItem, clearCart, isItemInCart } =
    useCartContext();

  const onAdd = (result) => {
    addItem(item, result);
    setQuantity(quantity2);
    //isItemInCart(item) ? setQuantity(result) : addItem(item);
    setItemCount(false);
  };

  return (
    <Card sx={style}>
      <CardMedia
        component="img"
        height="120"
        image={poster}
        alt="asd"
        className={classes.productImage}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Content
        </Typography>
        <Typography variant="body2" color="text.primary">
          {price}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Stock: {stock}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        {itemCount ? (
          <ItemCount
            item={item}
            stock={stock}
            initial={initial}
            onAdd={onAdd}
          />
        ) : (
          <Link to="/cart">
            <Button> Terminar Compra </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
}

export default ItemDetail;
