import React, { useContext } from "react";
import { CartContext } from "../../services/CartContext";
import CartImg from "../../img/carrito-de-compras.png";
import { CartWidgetStyle } from "./CartWidgetStyles";

//Carrito de compra
const CartWidget = () => {
  const { itemsInCart, countItems } = useContext(CartContext);


  return (
    <CartWidgetStyle className="cartWidget">
      <img className="cartImg" src={CartImg} alt="Carrito" />
      {itemsInCart() ? (<></>) : (<p className="pCartWidget">{countItems()}</p>)}
    </CartWidgetStyle>
  );
};

export default CartWidget;
