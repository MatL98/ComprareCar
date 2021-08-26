import React, { useContext } from 'react'
import { CartContext } from '../../services/CartContext';
import { ItemCartStyle } from './ItemCartStyles';


export const ItemCart = ({ car, cantidad, id }) => {
  const {removeItem} = useContext(CartContext);
  const removeFromCart = (event) => {
    const carID = event.target.value;
    console.log(event)
    removeItem(carID);
    
  };
  
  return (
    <ItemCartStyle className="CartItems">
        <img className="itemCartImg" src={car.img} alt={car.name}/>
        <h2>{car.name}</h2>
        <p>{car.model}</p>
        <p> Cantidad: {cantidad}</p>
        <span> $ {car.price} </span>
        <button className="btn-remove" value={id.idcar} onClick={removeFromCart}> Eliminar </button>
    </ItemCartStyle>
  )
} 