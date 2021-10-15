import "./App.css";
import NavBar from "./components/NavBar.js/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import Routes from "./Routes/Routes";
import React, { useState } from "react";
import { CssBaseline } from "@mui/material";

function App() {
  const [darkMode, setDarkmode] = useState(false);

  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      //   secondary: {
      //     main: "#31adc5",
      //     contrastText: "#FFFFFF",
      //   },
      //   primary: {
      //     main: "#00204a",
      //     contrastText: "#FFFFFF",
      //   },
      //   accent: {
      //     main: "#2b78ff",
      //   },
      //   progress: {
      //     green: "#4dd63b",
      //     yellow: "#ffc700",
      //     orange: "#ff9345",
      //   },
      //   state: {
      //     success: "#56e041",
      //     failure: "#ff3a5e",
      //   },
      //   grey: {
      //     main: "#75808f",
      //     light: "#d2d7da",
      //   },
      // },
      // shape: {
      //   borderRadius: 10,
      // },
      // typography: {
      //   // Use the system font instead of the default Roboto font.
      //   fontFamily: ['"Poppins"', "sans-serif"].join(","),
      //   useNextVariants: true,
      //   button: {
      //     textTransform: "none",
      //   },
      //   allVariants: {
      //     color: "#22282f",
      //   },
    },
  });
  const handleDarkMode = () => {
    setDarkmode(!darkMode);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="App">
            <section className="header">
              <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
            </section>
            <section className="itemsContainer">
              {/* <ItemListContainer greeting="Productos" /> */}
            </section>
          </div>
          <Routes />
        </CssBaseline>
      </ThemeProvider>
    </Router>
  );
}

export default App;
