
import React from "react";
import { Link } from 'react-router-dom';

export const Item = ({ car }) => {
    return (
        <Link to={`/item/${car.id}`} key = {car.id}>
        <div className="items" >
            <img className="carImg" src={car.img} alt='{car.brand}'/>
            <h2 className="titleCar">{car.brand}</h2>
            <p className="pCar">{car.model}</p>
        </div>
        </Link>
    )
} 