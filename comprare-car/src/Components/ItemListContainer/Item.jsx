
import React from "react";
import ItemCount from "../ItemCount/ItemCount";





export const Item = ({ namePoke }) => {
    return (
        <div className="items">
            <h3>{namePoke}</h3>
            <ItemCount initital={1} stock={8}></ItemCount>
        </div>
    )
}