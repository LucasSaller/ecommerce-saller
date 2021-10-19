import React from "react";
import { Switch, Route } from "react-router-dom";
import CartContainer from "../components/Cart.js/CartContainer";
import ItemListContainer from "../components/Items/ItemListContainer";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <ItemListContainer greeting="Productos" />
      </Route>
      <Route path="/cart" exact>
        <CartContainer />
      </Route>
    </Switch>
  );
}

export default Routes;
