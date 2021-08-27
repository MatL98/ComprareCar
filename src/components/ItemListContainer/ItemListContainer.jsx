import React, { useEffect, useState } from "react";
import { database } from "../../services/firebase/firebase";
import Loader from "../Loader/Loader";
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
		<>
      {car.length ? (
        <ItemListStyles>
        {car.map((cars) => <Item car={cars} key={cars.id} />)}
        </ItemListStyles>
      ) : ( 
          <Loader/>
      )}
		</>
  );
};

export default ItemListContainer;
