import React, { createContext, useContext, useState } from "react";
import { useErrorContext } from "./errorContext";

const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { snackbar, setSnackbar, setError } = useErrorContext();

  const maximoStock = (quantity, stock) => {
    return Math.min(quantity, stock);
  };
  const addQuantity = (itemToModify, quantityToAdd) => {
    if (itemToModify.quantity + quantityToAdd > itemToModify.stock) {
      setError("No hay mas stock de este producto");
      return;
    }
    return cart.map((item) =>
      item.id === itemToModify.id
        ? {
            ...item,
            quantity: maximoStock(item.quantity + quantityToAdd, item.stock),
          }
        : item
    );
  };
  const addItem = (item, quantityToAdd) => {
    if (isItemInCart(item)) {
      setCart(addQuantity(item, quantityToAdd));
    } else {
      setCart([...cart, { ...item, quantity: quantityToAdd }]);
      console.log("entre al else");
    }
  };

  const removeItem = (itemId) => {
    setCart([...cart.filter((item) => item.id !== itemId)]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isItemInCart = (item) => {
    return cart.some((cartItem) => item.id === cartItem.id);
  };

  const findItemInCart = (item) => {
    return cart.find((cartItem) => item.id === cartItem.id);
  };
  const totalQuantity = (cart) => {
    return cart.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isItemInCart,
        findItemInCart,
        addQuantity,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
