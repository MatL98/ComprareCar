import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../services/CartContext';
import CartImg from '../../img/carrito-de-compras.png'


//Carrito de compra
const CartWidget = () => {

    const {totalCantidad, isInCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0)

    const getCantidad = () => {
        setCantidad(totalCantidad)
    }

    useEffect(()=>{
        getCantidad()
    }, [totalCantidad])

    return(
        
        <div className="cart-container">
            <p className="cartWidget">{cantidad}</p>
            <img className = "cartImg" src={CartImg} alt="Carrito"/>
        </div>
    )

}

export default CartWidget;