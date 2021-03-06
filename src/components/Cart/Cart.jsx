import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import { CartStyle } from "./CartStyles";
import { ItemCart } from "./ItemCart";
import Form from '../Form/Form'

const Cart = () => {
  const { carrito, totalCart, cleanCart, itemsInCart} = useContext(CartContext);


  return itemsInCart() ? (
    <CartStyle>
      <div className="cartNoItem">
        <h5>No hay compras en el carrito..</h5>{" "}
        <Link to="/">
          <button className="btnBack">Volver al home</button>
        </Link>
      </div>
    </CartStyle>
  ) : (
    <CartStyle className="cartStyle">
      {carrito.map((c) => (
        <ItemCart car={c.carNew} key={c.idcar} cantidad={c.cantidad} id={c.idcar}/>
      ))}
      <button className="btn-clean" onClick={cleanCart}> Vaciar carrito </button>
      <Form cart={carrito} total={totalCart()}/>
    </CartStyle>
  );
};
export default Cart;
