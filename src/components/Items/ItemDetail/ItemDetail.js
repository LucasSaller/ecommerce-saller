import React, { useContext, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import ItemCount from "../../ItemCount/ItemCount";
import { Button, Box, Typography, Stack, Grid, Rating } from "@mui/material";
import { useCartContext } from "../../../context/cartContext";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const [itemCount, setItemCount] = useState(true);
  const { name, price, poster, stock } = item;
  const { addItem, findItemInCart } = useCartContext();

  const onAdd = (result) => {
    addItem(item, result);
    setItemCount(false);
  };

  return (
    <>
      <Container>
        <Grid container mt={8}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              height="300"
              image={poster}
              alt="asd"
              sx={{ objectFit: "contain" }}
            />
          </Grid>

          <Grid item xs={12} md={4} py={2} px={2}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {name}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Rating
                  name="simple-controlled"
                  value={2}
                  style={{ zIndex: 20 }}
                />
              </Stack>
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
            {itemCount ? (
              <>
                <Box display="flex" flexDirection="column" heigh="100%">
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <ItemCount
                      item={item}
                      stock={stock}
                      initial={findItemInCart(item)?.quantity || 1}
                      onAdd={onAdd}
                      withButton
                    />
                    <Typography variant="body2" color="text.primary">
                      {stock} disponibles
                    </Typography>
                  </Stack>
                </Box>
              </>
            ) : (
              <Link to="/cart">
                <Button>Ir al carrito </Button>
              </Link>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ItemDetail;
