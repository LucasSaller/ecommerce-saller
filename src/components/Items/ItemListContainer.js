import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import "./ItemListContainer.css";
import Item from "./Item";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
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
    }

    fetchData();
  }, []);

  useEffect(() => {
    const db = getFirestore();

    async function fetchCategory() {
      // Si es una categoria en especial
      if (categoryId && parseInt(categoryId) !== 0) {
        const q = query(
          collection(db, "items"),
          where("categoryId", "==", parseInt(categoryId))
        );
        const querySnapshot = await getDocs(q);
        const items = querySnapshot.docs.map((doc) => doc.data());
        setFilteredProducts(items);
      } else {
        // si es all
        const querySnapshot = await getDocs(collection(db, "items"));
        const items = querySnapshot.docs.map((doc) => doc.data());
        setProducts(items);
        setFilteredProducts(items);
        setLoading(false);
      }
    }
    fetchCategory();
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
