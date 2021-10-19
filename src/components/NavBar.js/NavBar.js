import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles, useTheme } from "@mui/styles";
import { withRouter, Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Popover from "@mui/material/Popover";
import CartContainer from "../Cart.js/CartContainer";
const useStyles = makeStyles({
  icon: {
    color: "#fff",
  },
  logo: {
    width: 150,
    height: 100,
    margin: "0 10px",
    objectFit: "contain",
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
  cartContainer: {
    minWidth: { xs: 200, md: 400 },
  },
});

function NavBar({ darkMode, handleDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [openPopover, setOpenPopover] = React.useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };
  const open = Boolean(openPopover);
  const id = open ? "simple-popover" : undefined;
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(!openDrawer);
  };
  const list = [
    { text: "Colections" },
    { text: "Men" },
    { text: "Woman" },
    { text: "About" },
    { text: "Contact" },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
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
          <Link to="/">
            <img alt="logo" src={logo} className={classes.logo} />
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <nav>
              <ul className={classes.menuItem}>
                <Link to="/">
                  <li>Collections</li>
                </Link>
                <Link to="/">
                  <li>Men</li>
                </Link>
                <Link to="/">
                  <li>Women</li>
                </Link>
                <Link to="/">
                  <li>About</li>
                </Link>
              </ul>
            </nav>
          </Box>

          <Box style={{ alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="mails"
              color="primary"
              className={classes.menuItem}
              onClick={handleOpenPopover}
            >
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon style={{ fill: "white" }} />
              </Badge>
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={openPopover}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              className={classes.cartContainer}
            >
              <CartContainer />
            </Popover>

            <IconButton onClick={handleDarkMode}>
              {darkMode ? (
                <Brightness7Icon style={{ fill: "white" }} />
              ) : (
                <Brightness4Icon style={{ fill: "white" }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClose={toggleDrawer}>
        <IconButton style={{ justifyContent: "flex-start" }}>
          <CloseIcon />
        </IconButton>
        <List>
          {list.map((menuItem, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemText primary={menuItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
export default withRouter(NavBar);
