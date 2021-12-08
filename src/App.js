import "./App.css";
import NavBar from "./components/NavBar.js/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { CartProvider } from "./context/cartContext";
import { ErrorProvider } from "./context/errorContext";
function App() {
  const [darkMode, setDarkmode] = useState(false);
  const primaryColor = darkMode ? "#85c4ef" : "#ff7d1a";
  const paperColor = darkMode ? "#3a3939" : "#fff";
  const darkColor = darkMode ? "#9accee" : "#fbad72";

  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: primaryColor,
        light: "#757ce8",
        dark: darkColor,
        contrastText: "#ffffff",
      },
      background: {
        paper: paperColor,
      },
    },
  });
  const handleDarkMode = () => {
    setDarkmode(!darkMode);
  };
  return (
    <ErrorProvider>
      <CartProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <div className="App">
                <section className="header">
                  <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
                </section>
              </div>
              <Routes />
            </CssBaseline>
          </ThemeProvider>
        </Router>
      </CartProvider>
    </ErrorProvider>
  );
}

export default App;
