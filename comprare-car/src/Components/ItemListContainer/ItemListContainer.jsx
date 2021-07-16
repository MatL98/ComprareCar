import React, { useState } from "react";
import { Item } from "./Item";




const ItemListContainer = () =>{
    const cars = [{brand: "Audi", model: "RS3 Sportback", year: 2020, price: 60000, id: 1, i: "../../img/rs3.jpg"},
                {brand: "Mercedes Benz", model: "C 63 AMG", year: 2021, price: 87000,id: 2, i: "../../img/rs3.jpg"},
                {brand: "BMW", model: "M3", year: 2018, price: 65000,id: 3 , i: "../../img/rs3.jpg"},
                {brand: "Ford", model: "Shelby GT350", year: 2017, price: 60000,id: 4, i: "../../img/rs3.jpg"}]

    const msToSeg = 1000;
    const [listItems, setListItems] = useState([])



    const getList = () => 
    {
        return(
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(cars)
                }, msToSeg * 2)
            })
        )   
        
    }
    getList()
    .then((resolve) => setListItems(resolve))


    return (
        <div className = "divCars">
            {listItems.map(car => <Item {...car}></Item>)}
        </div>
    )
    
}





export default ItemListContainer;