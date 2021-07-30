import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
//import { CartContext } from "../../services/CartContext";
import { database } from "../firebase/firebase";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ carTodisplay: car }) => {
    //const [addToitem, removeitem] = useContext(CartContext)

    const [count, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => setFinished(!finished);

    const handleSend = () => {
        //addToitem({ ...car, quantatity: car });
    };
    const handleRemove = () => {
        //removeitem(car);
    };

    return (
        <div className="itemDetails">
        <img className="itemImg" src={car.img} alt={car.id} />
        <h2>{car.brand} TODO BIEN</h2>
        <p>{car.model}</p>
        <p>{car.HP} funciona minimamente</p>
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
            <Link to="/item" onClick={handleState}>
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
