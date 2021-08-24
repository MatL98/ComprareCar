import React, { useState, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../services/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { ItemDetailStyle } from "./ItemDetailStyles";
import Loader from "../Loader/Loader";

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
        <Loader/>
      ) : (
        <ItemDetailStyle className="itemDetails">
          <img className="itemImg" src={carItem.img} alt={carItem.id} />
          <div className="itemDetail">
            <h2>{carItem.brand}  {carItem.model}</h2>
            <p>
              Modelo: {carItem.year}
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
              <button className="btn-buy"
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
                <button className="btn-agree" onClick={handleState}>Confirmar compra</button>
              </Link>
              <button className="btn-edit"
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
        </ItemDetailStyle>
      )}
    </>
  );
};
export default ItemDetail;
