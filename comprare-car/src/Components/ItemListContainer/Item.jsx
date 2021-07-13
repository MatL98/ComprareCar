import React from "react";







export const Item = ({brand, model, year, price}) => {
    return (
        <div className="items">
            <h3>{brand}</h3>
            <h4>{model}</h4>
            <p>{year}</p>
            <p>$:{price}</p>
        </div>
    )
}