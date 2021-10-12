import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../components/Cart.js/Cart";
import Home from "../components/Home/Home";
import Product from "../components/Products/Product";
import ItemListContainer from "../components/ItemListContainer";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products" exact>
        <ItemListContainer greeting="Productos" />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
