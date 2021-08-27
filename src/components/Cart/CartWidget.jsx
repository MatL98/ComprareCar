import React, { useContext } from "react";
import { CartContext } from "../../services/CartContext";
import CartImg from "../../img/carrito-de-compras.png";

//Carrito de compra
const CartWidget = () => {
  const { itemsInCart, countItems } = useContext(CartContext);


  return (
    <div className="cart-container">
      {itemsInCart() ? (<></>) : (<p className="pCartWidget">{countItems()}</p>)}
      <img className="cartImg" src={CartImg} alt="Carrito" />
    </div>
  );
};

export default CartWidget;
