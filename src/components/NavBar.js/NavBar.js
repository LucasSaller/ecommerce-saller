import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import "./NavBar.css";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { Container } from "@mui/material";

const useStyles = makeStyles({
  icon: {
    color: "#fff",
  },
  logo: {
    width: 150,
    height: 100,
    margin: "0 10px",
    objectFit: "contain",
    marginRight: "auto",
  },
  loginButton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    padding: "0 30px",
  },
  menuItem: {
    color: "#fff",
    display: "flex",
    gap: 20,
    listStyle: "none",
    alignItems: "center",

    "& a": {
      textDecoration: "none",
    },
    "& *:visited": {
      color: "white",
      textDecoration: "none",
    },
  },
  navRight: {
    display: "flex",
    float: "right",
  },
});
const categories = [
  { text: "All" },
  { text: "Men" },
  { text: "Woman" },
  { text: "Other" },
  { text: "Other2" },
];
function NavBar({ darkMode, handleDarkMode }) {
  const { cart } = useCartContext();

  const classes = useStyles();
  //const { categoryId } = useParams();

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(!openDrawer);
  };

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "flex-start" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={toggleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Link to="/" style={{ marginRight: "auto" }}>
            <img alt="logo" src={logo} className={classes.logo} />
          </Link>
          <div className={classes.navRight}>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <nav>
                <ul className={classes.menuItem}>
                  {categories.map((menuItem, index) => (
                    <NavLink
                      key={index}
                      to={`/category/${index}`}
                      activeClassName="activeMenu"
                    >
                      <ListItem disablePadding>
                        <ListItemButton style={{ borderRadius: 10 }}>
                          <ListItemText primary={menuItem.text} />
                        </ListItemButton>
                      </ListItem>
                    </NavLink>
                  ))}
                </ul>
              </nav>
            </Box>

            <Box
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <NavLink to="/cart">
                <IconButton
                  size="large"
                  aria-label="mails"
                  color="primary"
                  className={classes.menuItem}
                >
                  <Badge badgeContent={cart.length} color="error">
                    <ShoppingCartIcon style={{ fill: "white" }} />
                  </Badge>
                </IconButton>
              </NavLink>

              <IconButton onClick={handleDarkMode}>
                {darkMode ? (
                  <Brightness7Icon style={{ fill: "white" }} />
                ) : (
                  <Brightness4Icon style={{ fill: "white" }} />
                )}
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClose={toggleDrawer}>
        <IconButton
          style={{ justifyContent: "flex-start" }}
          onClick={handleDrawer}
        >
          <CloseIcon />
        </IconButton>
        <Container>
          <List>
            {categories.map((menuItem, index) => (
              <Link key={index} to={`/category/${index}`}>
                <ListItem disablePadding key={index}>
                  <ListItemButton onClick={handleDrawer}>
                    <ListItemText primary={menuItem.text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Container>
      </Drawer>
    </Box>
  );
}
export default NavBar;
