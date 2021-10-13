import React from "react";
import Product from "./Product";
import data from "../../dummy/data.json";
import { Grid } from "@mui/material";
import "./ItemListContainer.css";
function ItemListContainer({ greeting }) {
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "30px 0" }}>{greeting}</h2>
      <Grid container className="container__products">
        {data.items.map((item) => (
          <Grid item xs={12} md={4} style={{ marginBottom: 100 }}>
            <Product item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ItemListContainer;
