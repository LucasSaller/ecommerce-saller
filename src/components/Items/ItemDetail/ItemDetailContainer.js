import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import CircularProgress from "@mui/material/CircularProgress";
import data from "../../../dummy/data.json";
import { Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import PRODUCTS from "../../../utils/products";

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 2000);
  });
};
function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem().then((result) => {
      setItem(result.find((item) => item.id === id));
      setLoading(false);
      console.log(result);
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
          <CircularProgress color="primary" />
        </Box>
      )}
      {item && <ItemDetail item={item} />}
    </>
  );
}

export default ItemDetailContainer;
