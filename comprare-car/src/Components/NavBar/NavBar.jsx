import React from "react";
import Cart from "../Cart/Cart";

//Navegacion en conjunto con el carrito.
const Navbar = (props) => {
    console.log(props);
    return(
        <nav>
            <h1>{props.nombreDeTienda}</h1>
                <ul>
                    <li>productos</li>
                    <li>puntos de venta</li>
                    <li>nosotros</li>
                </ul>
                <Cart/>
        </nav>
    );
};


export default Navbar;