import React, { useState, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../services/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ carItem }) => {
  const { id: idParams } = useParams();

  const [count, setCount] = useState(1);

  const [finished, setFinished] = useState(false);

  const handleState = () => setFinished(!finished);

  const { carrito, addToItem, removeitem } = useContext(CartContext);

  const handleSend = () => {
    addToItem({
      img: carItem.img,
      name: carItem.brand,
      model: carItem.model,
      price: carItem.price,
      stock: carItem.stock,
      cantidad: count,
      idcar: idParams,
    });
  };
  const handleRemove = () => {
    removeitem({ idParams });
  };

  return (
    <>
      {!carItem ? (
        <h5>cargando</h5>
      ) : (
        <div className="itemDetails">
          <img className="itemImg" src={carItem.img} alt={carItem.id} />
          <h2>{carItem.brand}</h2>
          <p>
            {carItem.model} modelo: {carItem.year}
          </p>
          <p>Caballos de fuerza: {carItem.HP}</p>
          <p>Stock: {carItem.stock}</p>
          <h5>Precio: $ {carItem.price}</h5>
          {!finished ? (
            <>
              <ItemCount
                initital={1}
                count={count}
                setCount={setCount}
                stock={carItem.stock}
              ></ItemCount>
              <button
                onClick={() => {
                  handleState();
                  handleSend();
                }}
              >
                Comprar
              </button>
            </>
          ) : (
            <>
              <Link to="/cart" onClick={handleState}>
                <button onClick={handleState}>Confirmar compra</button>
              </Link>
              <button
                onClick={() => {
                  handleState();
                  handleRemove();
                }}
              >
                Modificar compra
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default ItemDetail;
