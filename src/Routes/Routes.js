import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "../components/Cart.js/Cart";
import ItemListContainer from "../components/Products/ItemListContainer";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <ItemListContainer greeting="Productos" />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
    </Switch>
  );
}

export default Routes;
