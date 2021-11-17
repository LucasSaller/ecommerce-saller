import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext({});
export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setError] = useState([]);

  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};
