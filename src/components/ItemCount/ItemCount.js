import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "./ItemCount.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Alert from "@mui/material/Alert";

function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial);
  const [error, setError] = useState("");

  const handleRemoveClick = () => {
    const mayor = Math.max(contador - 1, 1);
    if (mayor === 1) {
      setContador(1);
      setError("No se puede bajar de 1");
    } else {
      setError("");
      setContador(contador - 1);
    }
  };
  const handleAddClick = () => {
    const minimo = Math.min(contador + 1, stock);
    if (minimo === stock) {
      setContador(stock);
      setError("No se puede agregar mas de lo que hay en stock");
    } else {
      setContador(contador + 1);
      setError("");
    }
  };
  return (
    <div className="contador__container">
      <div className="contador__controles">
        <IconButton size="large" color="primary" onClick={handleRemoveClick}>
          <RemoveIcon />
        </IconButton>
        <p>{contador}</p>
        <IconButton size="large" color="primary" onClick={handleAddClick}>
          <AddIcon />
        </IconButton>
      </div>
      {error && <Alert severity="warning">{error}</Alert>}
      <div className="contador__buttonAdd">
        <Button fullWidth variant="contained">
          <ShoppingCartIcon
            style={{ marginRight: 10 }}
            size="medium"
            onClick={onAdd(contador)}
          />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
