import React from "react";
import ItemCount from "../ItemCount/ItemCount";
function Cart() {
  return (
    <div>
      <h2>Soy el cart</h2>
      <ItemCount initial={1} stock={22} />
    </div>
  );
}

export default Cart;
