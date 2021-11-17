import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getFirestore } from "../../../firebase";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    async function fetchData() {
      const querySnapshot2 = doc(db, "items", id);
      const itemInDb = await getDoc(querySnapshot2);
      if (itemInDb.exists()) {
        setItem(itemInDb.data());
      } else {
        console.log("No existe ese item");
      }

      setLoading(false);
    }

    fetchData();
  }, [id]);

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
