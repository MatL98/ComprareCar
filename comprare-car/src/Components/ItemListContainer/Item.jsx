import React from "react";
import { Link } from 'react-router-dom';
import { ItemStyle } from "./ItemStyles";


export const Item = ({ car }) => {
  return (
    <Link to={`/item/${car.id}`} key = {car.id}>
      <ItemStyle>
        <img src={car.img} alt={car.brand}/>
        <h2>{car.brand}</h2>
        <p>{car.model}</p>
        <span> $ {car.price} </span>
      </ItemStyle>
    </Link>
  )
} 