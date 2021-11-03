import "./App.css";
import NavBar from "./components/NavBar.js/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/Routes";
import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import ThemeConfig from "./theme";

function App() {
  const [darkMode, setDarkmode] = useState(false);
  const primaryColor = darkMode ? "#757ce8" : "#ff7d1a";
  const paperColor = darkMode ? "#3a3939" : "#fff";
  const darkColor = darkMode ? "#494b71" : "#fbad72";
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
    <Router>
      <ThemeProvider theme={theme}>
        {/* <ThemeConfig darkMode={darkMode}> */}
        <CssBaseline>
          <div className="App">
            <section className="header">
              <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
            </section>
          </div>
          <Routes />
        </CssBaseline>
      </ThemeProvider>
      {/* </ThemeConfig> */}
    </Router>
  );
}

export default App;
