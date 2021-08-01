import React, { useEffect, useState } from "react";
import { database, getFirebase } from "../firebase/firebase";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../../services/CartContext";


const ItemDetailContainer = () => {


    const [carItem, setCarsItem] = useState();
    const [loading, setLoading] = useState(false);
    const {id: idParams} = useParams()
    //const {carrito} = useContext(CartContext)
        //console.log(carrito)
    useEffect(() => {
        setLoading(true);
        setCarsItem();
        
        
            database.collection("cars").doc(idParams).get()
            .then((querySnapshot) => {
                if(querySnapshot.size === 0){
                    console.log("no hay resultados")
                }
                setCarsItem(querySnapshot.data());
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            })

        }, [idParams]);
    

    return !carItem ? (
        <h5>cargando</h5>
    ) : (
        <ItemDetail carItem ={carItem} key={carItem.id}/>
    );
    
};

export default ItemDetailContainer;
