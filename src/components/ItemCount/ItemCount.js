import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ItemCount.css";
import { Alert, Snackbar, Typography } from "@mui/material";
import { useErrorContext } from "../../context/errorContext";
import { useCartContext } from "../../context/cartContext";
function ItemCount({ item, stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial);
  const [error, setError] = useState("");
  const { snackbar, setSnackbar } = useErrorContext();
  const { addItem, addQuantity } = useCartContext();
  const disableAdd = contador === stock;
  const disableSub = contador === 1;

  const handleError = (msg) => {
    setError(msg);
    setSnackbar(true);
  };
  const handleRemoveClick = () => {
    contador < 1 ? handleError("no se puede bajar de 1") : setError("");
    const mayor = Math.max(contador - 1, 1);
    mayor === 1 ? setContador(1) : setContador(contador - 1);
    if (item.quantity !== 1) {
      addItem(item, -1);
    }
  };
  const handleAddClick = () => {
    console.log(contador);
    contador > stock
      ? handleError("No hay mas stock disponible")
      : setError("");

    const minimo = Math.min(contador + 1, stock);
    if (minimo === stock) {
      setContador(stock);
    } else {
      setContador(contador + 1);
    }
    if (item.quantity !== stock) {
      addItem(item, 1);
    }
  };
  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };
  return (
    <div className="contador__container">
      <Snackbar
        open={snackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>{" "}
      <div className="contador__controles">
        <IconButton
          size="small"
          color="primary"
          onClick={handleRemoveClick}
          disabled={disableSub}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body" color="text.secondary">
          {contador}
        </Typography>
        <IconButton
          size="small"
          color="primary"
          onClick={handleAddClick}
          disabled={disableAdd}
          style={{ width: 30, height: 30 }}
        >
          <AddIcon />
        </IconButton>
      </div>
      {/* <div className="contador__buttonAdd">
        <Button fullWidth variant="contained" onClick={() => onAdd(contador)}>
          <ShoppingCartIcon style={{ marginRight: 10 }} size="medium" />
          Add to Cart
        </Button>
      </div> */}
    </div>
  );
}

export default ItemCount;
