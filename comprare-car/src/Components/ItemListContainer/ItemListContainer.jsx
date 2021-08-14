import React, { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { Item } from "./Item";
import {ItemListStyles} from "./ItemListContainerStyle";

const ItemListContainer = () => {


  const [car, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    const cars = database.collection("cars");
    cars.get().then((query) =>
      setCars(
        query.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      )
    );
  };

  return (
		<ItemListStyles>
      {car.length ? (
        car.map((cars) => <Item car={cars} key={cars.id} />)
      ) : (
        <h5>cargando</h5>
      )}
		</ItemListStyles>
  );
};

export default ItemListContainer;
