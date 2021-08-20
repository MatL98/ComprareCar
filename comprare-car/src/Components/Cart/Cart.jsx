import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import { CartStyle } from "./CartStyles";
import { ItemCart } from "./ItemCart";
import Form from '../Form/Form';

const Cart = () => {
  const { carrito, totalCart, totalCantidad, isInCart } = useContext(CartContext);

  return carrito.length < 1 ? (
    <div>
      <h5>No hay compras en el carrito..</h5>{" "}
      <Link to="/">
        <button>Volver al home</button>
      </Link>
    </div>
  ) : (
    <CartStyle className="cartStyle">
      {carrito.map((c) => (
        <ItemCart car={c} key={c.idcar} cantidad={c.cantidad} />
      ))}
      <p className="pCart">
        Total: <span className="spanCart">${totalCart()}</span> dolares <br />
        Total de items a comprar:{" "}
        <span className="spanCart">{totalCantidad()}</span>
      </p>
      <Form cart={carrito} total={totalCart()} />
    </CartStyle>
  );
};
export default Cart;
