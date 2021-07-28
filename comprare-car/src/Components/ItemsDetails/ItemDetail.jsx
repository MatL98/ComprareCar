import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../services/CartContext";
import { database } from "../firebase/firebase";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ carTodisplay: car }) => {
    const [addToCart, removeCart] = useContext(CartContext);

    const [count, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => setFinished(!finished);

    const handleSend = () => {
        addToCart({ ...car, quantatity: count });
    };
    const handleRemove = () => {
        removeCart(car);
    };

    return (
        <div className="itemDetails">
        <img className="carImg" src={car.img} alt={car.id} />
        <h2>{car.brand}</h2>
        <p>
            {car.model}, {car.year}
        </p>
        <p>{car.HP}</p>
        <h5>{car.price}</h5>
        {!finished ? (
            <>
            <ItemCount
                initital={1}
                count={count}
                setCount={setCount}
                stock={8}
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
    );
};
export default ItemDetail;
