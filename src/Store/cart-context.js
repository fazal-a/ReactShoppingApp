import React from "react";
const CartContext = React.createContext({
  items: [],
  // totalAmount: 100,
  addItem: (item) => {},
  removeItem: (id) => {},
  addUnit: (item) => {},
  removeUnit: (id) => {},
});

export default CartContext;
