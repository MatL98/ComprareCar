import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const isInCart = (item) =>
    carrito.filter((itm) => itm.idcar === item.idcar).length === 0;

  const addToItem = (item) => {
    if (isInCart(item)) {
      setCarrito([...carrito, item]);
    }
  };
  const removeitem = (idcar) => {
    let itemException = carrito.filter((prod) => prod.idcar !== idcar);
    setCarrito(itemException);
  };
  const totalCart = () => {
    return carrito.reduce(
      (acc, prodCar) => acc + prodCar.price * prodCar.cantidad,
      0
    );
  };
  const totalCantidad = () => {
    return carrito.reduce((acc, prodCar) => acc + prodCar.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        addToItem,
        removeitem,
        totalCantidad,
        totalCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
