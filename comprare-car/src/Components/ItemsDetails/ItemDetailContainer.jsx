import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const msToSeg = 1000;
    const [car, setCars] = useState([]);

    

    const [carToDisplay, setCarToDisplay] = useState([]);
    const { id: idParams } = useParams();

    const getSelectedCar = () => {
            const cars = database.collection("cars");
            cars.get().then((query) =>
            setCars(
            query.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            })
        )
    );
        car.find((item) => item.id.toString() === idParams)
        
    };
    useEffect(() => {
        getSelectedCar();
    }, [idParams]);
    

    return !carToDisplay ? (
        <h5>cargando</h5>
    ) : (
        <ItemDetail carTodisplay={car} key="car.id"/>
    );
    
};

export default ItemDetailContainer;
