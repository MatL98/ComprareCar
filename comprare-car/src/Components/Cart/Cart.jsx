import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../services/CartContext";
import ItemDetail from "../ItemsDetails/ItemDetail";



const Cart = () =>{
    const {carrito, totalCart, totalCantidad} = useContext(CartContext);


    return(
        <div>
            {`Total: $ ${totalCart()} dolares`}
        </div>
    )

}
export default Cart;