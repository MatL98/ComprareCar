import React from 'react'
import { ItemCartStyle } from './ItemCartStyles';


export const ItemCart = ({ car, cantidad }) => {
  return (
    <ItemCartStyle className="CartItems">
        <img className="itemCartImg" src={car.img} alt={car.name}/>
        <h2>{car.name}</h2>
        <p>{car.model}</p>
        <p> Cantidad: {cantidad}</p>
        <span> $ {car.price} </span>
    </ItemCartStyle>
  )
} 