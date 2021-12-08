import React from "react";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Card,
  IconButton,
  CardMedia,
  Box,
  CardContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

import "./Cart.css";

function CartItem({ item }) {
  const { name, price, poster, stock, id, quantity } = item;
  const { removeItem } = useCartContext();
  return (
    <>
      <div className="cart__container" style={{ borderRadius: "20px" }}>
        <Card elevation={4} sx={{ minHeight: "150px" }}>
          <Grid container flexWrap="nowrap">
            <CardMedia
              component="img"
              sx={{ width: { xs: "100px", md: "151px" } }}
              image={poster}
              alt={name}
            />
            <Grid item xs={8} md={10} display="flex" flexDirection="column">
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="subtitle">
                  {name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  ${price}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  x{quantity} = ${price * quantity}
                </Typography>
              </CardContent>
              <Box
                display="flex"
                flexDirection="row"
                sx={{
                  justifyContent: { xs: "space-between", md: "space-between" },
                }}
              >
                <ItemCount
                  item={item}
                  initial={item.quantity || 1}
                  stock={stock}
                  isCart
                />
                <IconButton onClick={() => removeItem(id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Divider />
      </div>
    </>
  );
}

export default CartItem;
