import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ItemCount.css";
import { Typography } from "@mui/material";
import { useCartContext } from "../../context/cartContext";

function ItemCount({ item, stock, initial, onAdd, withButton, isCart }) {
  const [contador, setContador] = useState(initial);

  const { addItem } = useCartContext();
  const disableAdd = item.quantity === stock;
  const disableSub = item.quantity === 1;

  const handleRemoveClick = () => {
    const mayor = Math.max(contador - 1, 1);
    if (mayor === 1) {
      setContador(1);
    } else {
      setContador(contador - 1);
    }
    if (isCart && item.quantity !== 1) {
      addItem(item, -1);
    }
  };
  const handleAddClick = () => {
    const minimo = Math.min(contador + 1, stock);
    if (minimo === stock) {
      setContador(stock);
    } else {
      setContador(contador + 1);
    }
    if (isCart && item.quantity !== stock) {
      addItem(item, 1);
    }
  };

  return (
    <div className="contador__container">
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
      {withButton && (
        <div className="contador__buttonAdd">
          <IconButton
            color="primary"
            variant="contained"
            onClick={() => onAdd(contador)}
          >
            <ShoppingCartIcon size="medium" />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default ItemCount;
