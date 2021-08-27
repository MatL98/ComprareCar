import React, { createContext, useState } from "react";
  
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


  const updateCart = (carrito) => {
    const itemsSort = carrito.sort((a, b) =>
      a.idcar > b.idcar ? 1 : -1
    );
    setCarrito(itemsSort);
  };

  const addToItem = (newItem) => {
    if (isInCart(newItem.idcar)) {
      itemUpdate(newItem);
    }else {  
      updateCart([...carrito, newItem]);
    }
  };

  const removeItem = (idCar) => {
    let itemException = carrito.filter((prod) => prod.idcar !== idCar);
    setCarrito(itemException);
  };
  
  const isInCart = (idCar) =>
    carrito.some((itm) => itm.idcar === idCar);

  const itemUpdate = (newItem) =>{
    const carritoCopy = carrito.slice();
    const i = carritoCopy.findIndex(
      (item) => item.idcar === newItem.idcar);
    if (console.log(carritoCopy[i].cantidad) !== console.log(newItem.cantidad)) {
      carritoCopy.splice(i, 1, newItem);
      updateCart(carritoCopy);
    }
  }

  const cleanCart = () =>{
    setCarrito([]);
  }

  const itemsInCart = () => carrito.length < 1;
  const countItems = () => carrito.length;

  const totalCart = () => {
    return carrito.reduce(
      (acc, prodCar) => acc + prodCar.carNew.price * prodCar.cantidad, 0
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
        removeItem,
        totalCantidad,
        totalCart,
        isInCart,
        cleanCart,
        itemsInCart,
        countItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
