import React, { useContext } from 'react'
import { CartContext } from '../../services/CartContext';
import { ItemCartStyle } from './ItemCartStyles';


export const ItemCart = ({ car, cantidad, id }) => {
  const {removeItem} = useContext(CartContext);
  const removeFromCart = (event) => {
    const carID = event.target.value;
    removeItem(carID);
    
  };
  
  return (
    <ItemCartStyle className="CartItems">
      <img className="itemCartImg" src={car.img} alt={car.name}/>
      <h2>{car.brand} {car.model}</h2>
      <p> Cantidad: {cantidad}</p>
      <span> $ {car.price * cantidad} </span>
      <button className="btn-remove" value={id} onClick={removeFromCart}> Eliminar </button>
    </ItemCartStyle>
  )
} 