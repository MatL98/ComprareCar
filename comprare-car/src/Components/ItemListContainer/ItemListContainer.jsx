import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { Item } from "./Item";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
    const msToSeg = 1000;


    const [car, setCars] = useState([])

    
        const carss = database.collection('cars')
        carss.get().then((query)=> setCars(query.docs.map(doc => {
            return {...doc.data(), id: doc.id};
        })))
    

        return (
            <div className="grid-container">
                {car.length ? (
                    car.map((cars) => 
                    <Link key={car.id} to={`detalles/{car.key}`}>
                    <Item car ={cars} key={cars.id} />)
                    </Link> 
                    ) ): (
                    <h5>cargando</h5>
                )}
            </div>
        )






}



export default ItemListContainer;
