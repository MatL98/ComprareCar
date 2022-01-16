import React, { useContext, useState } from "react";
import { database } from "../../services/firebase/firebase";
import { FormStyle } from "./FormStyles";
import { CartContext } from "../../services/CartContext";

const Form = ({ cart, total }) => {
  const { cleanCart, totalCantidad, totalCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();

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

    const addOrder = async (order) => {
      try {
        const orders = await database.collection("orders").add(order);
        console.log(orders);
        if (orders) {
          setOrderId(orders.id);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const updateStock = async () => {
      try {
        for (let i = 0; i < cart.length; i++) {
          let idCar = cart[i].idcar;
          let cantidad = cart[i].cantidad;
          let stock = cart[i].carNew.stock;

          if (stock > cantidad) {
            const cars = await database
              .collection("cars")
              .doc(idCar)
              .update({
                stock: stock - cantidad,
              });
          } else {
            console.log("no hay suficiente stock");
          }
          console.log(`Tu compra se ha realizado su orden es ${orderId}`);
          cleanCart();
        }
      } catch (error) {
        console.log(error);
      }
    };

    const finishBuy = async () => {
      await addOrder(newOrder);

      await updateStock();
    };
    await finishBuy();
  };

  return (
    <FormStyle className="formStyle">
      <div>
        <h2>Finalizá tu compra</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Nombre" type="text" id="name" required />
          <input placeholder="Apellido" type="text" id="sname" required />
          <input placeholder="Teléfono" type="tel" id="phoneNumber" required />
          <input placeholder="E-mail" type="email" id="mail" required />
          <button type="submit">COMPRAR</button>
        </form>
      </div>
      <div className="totalFinal">
        <p className="pCart">
          Total: <span className="spanCart">${totalCart()}</span> dolares <br />
          Total de items a comprar:{" "}
          <span className="spanCart">{totalCantidad()}</span>
        </p>
      </div>
    </FormStyle>
  );
};

export default Form;
