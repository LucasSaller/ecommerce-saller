import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import {
  Button,
  Grid,
  Card,
  IconButton,
  Stack,
  CardMedia,
  Box,
  Container,
  CardContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";

import "./Cart.css";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
function CartItem({ item }) {
  const { name, price, poster, stock, id, quantity } = item;
  const { removeItem } = useCartContext();
  const theme = useTheme();

  return (
    <>
      <div className="cart__container" style={{ borderRadius: "20px" }}>
        <Card sx={{ display: "flex", minHeight: "150px" }}>
          <Grid container display="flex">
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
                  ${price * quantity}
                </Typography>
              </CardContent>
              <Box
                display="flex"
                flexDirection="row"
                sx={{
                  justifyContent: { xs: "space-between", md: "space-between" },
                }}
              >
                <ItemCount item={item} initial={1} stock={stock} />
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
