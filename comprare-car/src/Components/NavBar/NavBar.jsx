import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import { NavBarStyle } from "./NavBarStyles";
//Navegacion en conjunto con el carrito.
const Navbar = () => {
  return (
    <NavBarStyle>
      <nav>
      <Link to="/">
        <h1 className="title">ComprareCar</h1>
      </Link>
      <ul className="navBarUl">
        <li>
          <NavLink key={"1"} to={`/categoria/coupe`}>
            Coupe
          </NavLink>
        </li>
        <li>
          <NavLink key={"2"} to={`/categoria/suv`}>
            suvs
          </NavLink>
        </li>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
      </nav>
    </NavBarStyle>
  );
};

export default Navbar;
