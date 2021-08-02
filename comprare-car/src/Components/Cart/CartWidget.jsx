import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/CartContext';
import CartImg from '../../img/carrito-de-compras.png'


//Carrito de compra
const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext);

    return(
        
        <div className="cart-container">
            <p className="cartWidget">{totalCantidad()}</p>
            <img className = "cartImg" src={CartImg} alt="Carrito"/>
        </div>
    )

}

export default CartWidget;