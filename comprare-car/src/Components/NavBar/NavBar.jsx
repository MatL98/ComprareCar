import React from "react";
import Cart from "../Cart/Cart";

//Navegacion en conjunto con el carrito.
const Navbar = () => {
    console.log();
    return(
        <nav className="navBar">
            <h1>ComprareCar</h1>
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