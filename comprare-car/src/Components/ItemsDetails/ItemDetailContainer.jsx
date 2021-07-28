import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const msToSeg = 1000;
    const [car, setCars] = useState([]);

    const carss = database.collection("cars");
    carss.get().then((query) =>
        setCars(
        query.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        })
        )
    );

    const [carToDisplay, setCarToDisplay] = useState();
    const { id: idParams } = useParams();

    const getSelectedCar = () => {
        return new Promise((resolve) => {
        setTimeout(() => {
            resolve(car.find((item) => item.id.toString() === idParams));
        }, msToSeg * 2);
        });
    };
    useEffect(() => {
        getSelectedCar().then((result) => setCarToDisplay(result));
    }, [idParams]);

    return !carToDisplay ? (
        <h5>cargando</h5>
    ) : (
        <ItemDetail carTodisplay={carToDisplay} key={car.id} />
    );
};

export default ItemDetailContainer;
