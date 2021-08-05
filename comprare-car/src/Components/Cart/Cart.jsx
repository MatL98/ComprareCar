import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import { Item } from "../ItemListContainer/Item";



const Cart = () =>{
    const {carrito, totalCart, totalCantidad, isInCart} = useContext(CartContext);


    return(
        <div>
            {carrito.map(c => <Item car = {c} key={c.idcar} cantidad={c.cantidad}/>)}
            {`Total: $ ${totalCart()} dolares`}
            {`Total de items a comprar: $ ${totalCantidad()}`}
        </div>
    )

}
export default Cart;