import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { Item } from "./Item";
import { Link, useParams } from "react-router-dom";


const ItemListContainer = () => {
    const msToSeg = 1000;

    const [car, setCars] = useState([]);

    

    useEffect(() => {
        getCars()
    }, []);
    

    const getCars =  () =>{
        const cars =  database.collection("cars");
        cars.get().then((query) =>
        setCars(
        query.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
        )
    ); 
    }


    return (
        <div className="grid-container">
        {car.length ? (
            car.map((cars) => <Item car={cars} key={cars.id} />)
        ) : (
            <h5>cargando</h5>
        )}
        </div>
    );
};

export default ItemListContainer;
