import React, { useState, useEffect } from "react";
import data from "../../dummy/data.json";
import { Grid, Typography } from "@mui/material";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const task = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data.items);
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
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>{greeting}</h1>
      <Grid container className="container__products">
        <ItemList items={products} loading={loading} />
      </Grid>
    </div>
  );
}

export default ItemListContainer;
