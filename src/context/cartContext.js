import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    console.log(cart);
    isItemInCart(item)
      ? console.log("El item ya esta en el carrito")
      : setCart([...cart, item]);
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
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, isItemInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
