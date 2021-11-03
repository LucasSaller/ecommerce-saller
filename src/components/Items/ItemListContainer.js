import React, { useState, useEffect } from "react";
import data from "../../dummy/data.json";
import { Button, Container, Grid, Typography } from "@mui/material";
import "./ItemListContainer.css";
import { Box, Stack } from "@mui/material";
import PRODUCTS from "../../utils/products";
import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const task = new Promise((resolve) => {
      setTimeout(() => {
        resolve(PRODUCTS);
      }, 3000);
    });

    task.then(
      (result) => {
        setProducts(result);
        setLoading(false);
      },
      (error) => {}
    );
  }, []);

  return (
    <div>
      <Container>
        <div style={{ textAlign: "center" }}>
          <h1>{greeting}</h1>
          {loading && (
            <CircularProgress color="primary" style={{ textAlign: "center" }} />
          )}
        </div>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ mb: 5 }}
        >
          <Button disableRipple color="inherit">
            Todos
          </Button>
          <Button
            disableRipple
            color="inherit"
            onClick={() => setSelectedCategory(2)}
          >
            Categoria1
          </Button>
          <Button
            disableRipple
            color="inherit"
            onClick={() => setSelectedCategory(3)}
          >
            Categoria2
          </Button>
          <Button
            disableRipple
            color="inherit"
            onClick={() => setSelectedCategory(4)}
          >
            Categoria3
          </Button>
          <Button
            disableRipple
            color="inherit"
            onClick={() => setSelectedCategory(5)}
          >
            Categoria4
          </Button>
        </Stack>
        <Grid container spacing={3}>
          {products &&
            products.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                style={{ marginBottom: 100 }}
                key={item.id}
                spacing={2}
              >
                <Item item={item} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ItemListContainer;
