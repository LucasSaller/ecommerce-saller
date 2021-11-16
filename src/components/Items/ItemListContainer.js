import React, { useState, useEffect } from "react";
import data from "../../dummy/data.json";
import { Button, Container, Grid } from "@mui/material";
import "./ItemListContainer.css";
import { Stack } from "@mui/material";
import PRODUCTS from "../../utils/products";
import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "../../firebase";
function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "items"));
      const items = querySnapshot.docs.map((doc) => doc.data());
      setProducts(items);
      setFilteredProducts(items);
      setLoading(false);
      setTimeout(() => {}, 1000);
    }

    // const task = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(PRODUCTS);
    //   }, 500);
    // });

    // task.then(
    //   (result) => {
    //     setProducts(result);
    //     setFilteredProducts(result);
    //     setLoading(false);
    //   },
    //   (error) => {}
    // );
    fetchData();
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
