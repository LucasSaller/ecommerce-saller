import React from "react";
import data from "../../dummy/data.json";
import { Grid } from "@mui/material";
import "./ItemListContainer.css";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  let items = [];
  const task = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.items);
    }, 3000);
  });
  task.then(
    (result) => {
      items = result;
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "30px 0" }}>{greeting}</h2>
      <Grid container className="container__products">
        <ItemList items={items} />
      </Grid>
    </div>
  );
}

export default ItemListContainer;
