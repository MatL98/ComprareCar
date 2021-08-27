import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { database } from "../../services/firebase/firebase";
import { Item } from "../ItemListContainer/Item";
import { ItemListStyles } from "../ItemListContainer/ItemListContainerStyle";
export const Autos = () => {
  let categoria = "coupe";

  const [car, setCars] = useState([]);

  const carss = database.collection("cars").where("category", "==", categoria);
  carss.get().then((query) =>
    setCars(
      query.docs.map((doc) => {
        return { ...doc.data(), categoria: doc.category, id: doc.id };
      })
    )
  );

  return car.length ? (
    <ItemListStyles>
      {car.map((c) => (
        <Item car={c} key={c.id} />
      ))}
    </ItemListStyles>
  ):(
    <Loader/>
  )
};
