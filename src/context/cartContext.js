import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (itemId) => {
    setCart(...cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const isItemInCart = (item) => {
    return cart.includes((cartItem) => item.id === cartItem.id);
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isItemInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
