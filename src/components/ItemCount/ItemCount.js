import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import "./ItemCount.css";
function ItemCount({ stock, initial, onAdd }) {
  var [contador, setContador] = useState(initial);

  const handleRemoveClick = () => {
    setContador(contador--);
    console.log(contador);
  };
  const handleAddClick = () => {
    setContador(contador++);
    console.log(contador);
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
