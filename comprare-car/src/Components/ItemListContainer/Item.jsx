import React from "react";
import ItemCount from "../ItemCount/ItemCount";





export const Item = ({brand, model, year, price, i}) => {
    return (
        <div className="items">
            <img src={i}></img>
            <h3>{brand}</h3>
            <h4>{model}</h4>
            <p>{year}</p>
            <p>$:{price}</p>
            <ItemCount initital={1} stock={8}></ItemCount>  
        </div>
    )
}