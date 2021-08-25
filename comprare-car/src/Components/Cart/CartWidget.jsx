import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../services/CartContext";
import CartImg from "../../img/carrito-de-compras.png";

//Carrito de compra
const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  const getCantidad = () => {
    setCantidad(totalCantidad);
  };

  useEffect(() => {
    getCantidad();
  }, [totalCantidad]);

  return (
    <div className="cart-container">
      {cantidad < 1 ? (<></>) : (<p className="pCartWidget">{cantidad}</p>)}
      <img className="cartImg" src={CartImg} alt="Carrito" />
    </div>
  );
};

export default CartWidget;
