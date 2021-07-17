import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import styled from 'styled-components';


const h3Style = styled.h3`
    display: flex;
    font-size: 5rem;
`;




export const Item = ({brand, model, year, price, i}) => {
    return <h3Style>
            <img src={i}></img>
            <h3>{brand}</h3>
            <h4>{model}</h4>
            <p>{year}</p>
            <p>$:{price}</p>
            <ItemCount initital={1} stock={8}></ItemCount>  
        </h3Style> 
}