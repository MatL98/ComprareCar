import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { database } from '../firebase/firebase'
import Navbar from '../NavBar/NavBar'
import ItemCount from '../ItemCount/ItemCount';

const ButtonCount = {};
const inputCount = {}



export  const ItemDetail = ({initial, stock}) =>{
    const Count = inpuType === 'button' ?
        ButtonCount : Count;
        const stock = item.stock;
        const initial = item.initial;

    function addToCart(quantity){
        if(item.inStock){
            console.log(`Agregar al cart el item: 
            ${car.id} cantidad ${quantity}`)
        }
    }




    return(
        <>
        <Navbar/>
        <div className="itemDetails">
            <h2>Nombre</h2>

            <ItemCount initital={1} stock={8}></ItemCount>

        </div>
        </>    
    )
}