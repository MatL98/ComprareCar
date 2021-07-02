import React from "react";

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
                <button onClick={props.darBienvenida}>carrito</button>
        </nav>
    );
};


export default Navbar;