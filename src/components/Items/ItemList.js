import React from "react";
import Item from "./Item";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function ItemList({ items, loading }) {
  return (
    <div>
      <Grid container>
        {items &&
          items.map((item) => (
            <Grid
              item
              xs={12}
              md={4}
              style={{ marginBottom: 100 }}
              key={item.id}
            >
              <Item item={item} />
            </Grid>
          ))}
        {loading && <CircularProgress color="primary" />}
      </Grid>
    </div>
  );
}

export default ItemList;
