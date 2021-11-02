import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import CircularProgress from "@mui/material/CircularProgress";
import data from "../../../dummy/data.json";
import { Box } from "@material-ui/core";
const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.items);
    }, 2000);
  });
};
function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem().then((result) => {
      setItem(result[0]);
      setLoading(false);
      console.log(item);
    });
  }, []);
  return (
    <>
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80vh"
        >
          <CircularProgress color="primary" />{" "}
        </Box>
      )}
      {item && <ItemDetail item={item} />}
    </>
  );
}

export default ItemDetailContainer;
