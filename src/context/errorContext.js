import React, { createContext, useContext, useState } from "react";

const ErrorContext = createContext({});
export const useErrorContext = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState(false);

  return (
    <ErrorContext.Provider value={{ error, snackbar, setSnackbar, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};
