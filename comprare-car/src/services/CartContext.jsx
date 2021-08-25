import React, { createContext, useState } from "react";
  
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


  const updateCart = (carrito) => {
    const itemsSort = carrito.sort((a, b) =>
      a.id > b.id ? 1 : -1
    );
    setCarrito(itemsSort);
    //sessionStorage.setItem("carrito", JSON.stringify(itemsSort));
  };

  const addToItem = (newItem) => {
    if (isInCart(newItem.idcar)) {
      itemUpdate(newItem);
    }else {  
      setCarrito([...carrito, newItem]);
    }
  };

  const removeitem = (idcar) => {
    let itemException = carrito.filter((prod) => prod.idcar !== idcar);
    setCarrito(itemException);
  };
  
  const isInCart = (newItem) =>
    carrito.filter((itm) => itm.idcar === newItem.idcar).length === 0;

  const itemUpdate = (newItem) =>{
    const carritoCopy = carrito.slice();
    const position = carritoCopy.findIndex(
      (item) => item.idcar === item.idcar
    );
    if (carritoCopy[position] !== newItem.cantidad) {
      carritoCopy.splice(position, 1, newItem);
      updateCart(carritoCopy);
    }
  }

  const cleanCart = () =>{
    setCarrito([]);
  }

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
        cleanCart,
        updateCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
