import React from "react";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";


//Navegacion en conjunto con el carrito.
const Navbar = () => {
    console.log();
    return (
        <nav className="navBar">
            <Link to ="/"><h1 className="navBarTitle">ComprareCar</h1></Link>
            <ul>
                <li><NavLink key={"1"} to={`/autos`} activeClassName="currentCategory">Autos</NavLink></li>
                <li><NavLink key={"2"} to={`/motos`}>Motos</NavLink></li>
                <li><NavLink key={"3"} to={`/contacto`}>Contacto</NavLink></li>
            </ul>
            <Cart />
        </nav>
    );
};


export default Navbar;