import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";




//Navegacion en conjunto con el carrito.
const Navbar = () => {


    return (
        <nav className="navBar">
            <Link to ="/"><h1 className="navBarTitle">ComprareCar</h1></Link>
            <ul>
                <li><NavLink key={"1"} to={`/categoria/coupe`}>Coupe</NavLink></li>
                <li><NavLink key={"2"} to={`/categoria/suv`}>suvs</NavLink></li>
            </ul>
                <CartWidget />
        </nav>
    );
};


export default Navbar;