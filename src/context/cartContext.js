import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [snackbar, setSnackbar] = useState(false);

  const addQuantity = (itemToModify, quantityToAdd) => {
    const quantityCheck = quantityToAdd ? quantityToAdd : 1;
    return cart.map((item) =>
      item.id === itemToModify.id
        ? { ...item, quantity: item.quantity + quantityCheck }
        : item
    );
  };
  const addItem = (item, quantityToAdd) => {
    isItemInCart(item)
      ? setCart(addQuantity(item, quantityToAdd))
      : setCart([...cart, { ...item, quantity: 1 }]);
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
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        isItemInCart,
        snackbar,
        setSnackbar,
        addQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
