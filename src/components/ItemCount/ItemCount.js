import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "./ItemCount.css";
function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(initial);

  const handleRemoveClick = () => {
    const mayor = Math.max(contador - 1, 1);
    const resultado = mayor === 1 ? setContador(1) : setContador(contador - 1);
  };
  const handleAddClick = () => {
    const minimo = Math.min(contador + 1, stock);
    const resultado =
      minimo === stock ? setContador(stock) : setContador(contador + 1);
  };
  return (
    <div className="contador__container">
      <div className="contador__controles">
        <IconButton size="large" color="error" onClick={handleRemoveClick}>
          <RemoveIcon />
        </IconButton>
        <p>{contador}</p>
        <IconButton size="large" color="success" onClick={handleAddClick}>
          <AddIcon />
        </IconButton>
      </div>
      <div className="contador__buttonAdd">
        <Button fullWidth variant="contained">
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
