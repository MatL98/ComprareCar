
import React from "react";


export const Item = ({ car }) => {
    return (
        <div className="items" >
            <img className="carImg" src={car.img}/>
            <h2 className="titlePokemon">{car.brand}</h2>
            <p>{car.model}</p>
        </div>
    )
}