import React, { useState, useEffect } from "react";
import data from "../../dummy/data.json";
import { Button, Container, Grid } from "@mui/material";
import "./ItemListContainer.css";
import { Stack } from "@mui/material";
import PRODUCTS from "../../utils/products";
import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const { categoryId } = useParams();

  useEffect(() => {
    const task = new Promise((resolve) => {
      setTimeout(() => {
        resolve(PRODUCTS);
      }, 3000);
    });

    task.then(
      (result) => {
        setProducts(result);
        setFilteredProducts(result);
        setLoading(false);
      },
      (error) => {}
    );
  }, []);

  useEffect(() => {
    if (categoryId && parseInt(categoryId) !== 0) {
      setFilteredProducts(
        [...products].filter(
          (product) => product.categoryId === parseInt(categoryId)
        )
      );
    } else if (categoryId) {
      setFilteredProducts(products);
    }
  }, [categoryId, products]);

  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <h1>{greeting}</h1>
        {loading && (
          <CircularProgress color="primary" style={{ textAlign: "center" }} />
        )}
      </div>
      <Grid container spacing={3}>
        {filteredProducts &&
          filteredProducts.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              style={{ marginBottom: 20 }}
              key={item.id}
            >
              <Item item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default ItemListContainer;
