import './App.css';
import NavBar from './components/NavBar.js/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    secondary: {
      main: '#31adc5',
      contrastText: '#FFFFFF',
    },
    primary: {
      main: '#00204a',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#2b78ff',
    },
    progress: {
      green: '#4dd63b',
      yellow: '#ffc700',
      orange: '#ff9345',
    },
    state: {
      success: '#56e041',
      failure: '#ff3a5e',
    },
    grey: {
      main: '#75808f',
      light: '#d2d7da',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
    useNextVariants: true,
    button: {
      textTransform: 'none',
    },
    allVariants: {
      color: '#22282f',
    },
  },

});


function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <section> 
       <NavBar />
     </section>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
