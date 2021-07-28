import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { Item } from "./Item";
import { Link, useParams } from "react-router-dom";
import { ItemDetail } from "../ItemsDetails/ItemDetail";
import { ItemList } from "../ItemListContainer/ItemList";

const ItemListContainer = () => {
    const msToSeg = 1000;

    const { categoria } = useParams();
    const [car, setCars] = useState([]);

    const carss = database.collection("cars");
    carss.get().then((query) =>
        setCars(
        query.docs.map((doc) => {
            return { ...doc.data(), categoria: doc.category, id: doc.id };
        })
        )
    );

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
