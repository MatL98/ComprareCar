import React, { useState } from "react";
import firebase from "firebase";
import { database } from "../../services/firebase/firebase";
import { FormStyle } from "./FormStyles";

const Form = ({ cart, total, cleanCart }) => {
  const handleSubmit = (event) => {
    event.preventDefault();


    let orderId;

    const userData = {
      name: event.target.name.value,
      surname: event.target.sname.value,
      phone: event.target.phoneNumber.value,
      email: event.target.mail.value,
    };

    const newOrder = {
      buyer: userData,
      items: cart,
      date: new Date().toString(),
      total: total,
    };

    const orders = database.collection("orders");

    orders
      .add(newOrder)
      .then((res) => {
        orderId = res.id;
        console.log(orderId);
      })
      .catch((error) => {
        console.log("ERROR: " + error);
      });

    const itemsToCheck = database.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((item) => item.idcar)
    );
    
    const batch = database.batch();
    const outOfStockItems = [];
    
    itemsToCheck.get().then((query) => {  
      query.docs.forEach((doc, index) => {
        if (doc.data().stock >= newOrder.items[index].cantidad) {
          batch.update(doc.ref, {
            stock: doc.data().stock - newOrder.items[index].cantidad,
          });
        } else {
          outOfStockItems.push({ ...doc.data(), id: doc.id });
        }
      });

      if (outOfStockItems.length === 0) {
        batch.commit().then(() => {
          console.log(orderId)
        });
      } else {
        alert("ERROR: Hay items que ya no tienen stock suficiente.");
      }
    });
  };

  return (
    <FormStyle className="formStyle">
      <div onSubmit={handleSubmit}>
        <h2>Finalizá tu compra</h2>
        <form action="#">
          <input placeholder="Nombre" type="text" id="name" />
          <input placeholder="Apellido" type="text" id="sname" />
          <input placeholder="Teléfono" type="tel" id="phoneNumber" />
          <input placeholder="E-mail" type="email" id="mail" />
          <button type="submit">COMPRAR</button>
        </form>
      </div>
    </FormStyle>
  );
};

export default Form;