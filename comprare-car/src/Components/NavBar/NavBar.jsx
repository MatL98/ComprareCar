import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { CategoryNavBar } from "./CategoryNavBar";


//Navegacion en conjunto con el carrito.
const Navbar = () => {
    console.log();
    return (
        <nav className="navBar">
            <a href="/"><h1 className="navBarTitle">ComprareCar</h1></a>
            <ul>
                <Link key={"1"} to={`category/${CategoryNavBar}`}>
                    <li><a href="">autos</a></li>
                </Link>
                <Link key={"2"} to={`category/${CategoryNavBar}`}>
                    <li><a href="">motos</a></li>
                </Link>
                <Link key={"3"} to={`category/${CategoryNavBar}`}>
                    <li><a href="">contacto</a></li>
                </Link>
            </ul>
            <Cart />
        </nav>
    );
};


export default Navbar;