import React, { useState } from "react";
import { database } from "../firebase/firebase";
import { Item } from "../ItemListContainer/Item";

export const Suv = () => {
  let categoria = "suv";

  const [car, setCars] = useState([]);

  const carss = database.collection("cars").where("category", "==", categoria);
  carss.get().then((query) =>
    setCars(
      query.docs.map((doc) => {
        return { ...doc.data(), categoria: doc.category, id: doc.id };
      })
    )
  );

  return (
    <div className="grid-container">
      {car.map((c) => (
        <Item car={c} key={c.id} />
      ))}
    </div>
  );
};
