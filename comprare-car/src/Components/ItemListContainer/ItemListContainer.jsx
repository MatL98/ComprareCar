import React from "react";
import { Item } from "./Item";



const ItemListContainer = () =>{
    const cars = [{brand: "Audi", model: "RS3 Sportback", year: 2020, price: 60000, id: 1},
                {brand: "Mercedes Benz", model: "C 63 AMG", year: 2021, price: 87000,id: 2},
                {brand: "BMW", model: "M3", year: 2018, price: 65000,id: 3},
                {brand: "Ford", model: "Shelby GT350", year: 2017, price: 60000,id: 4}]



    return (
        <div className = "divCars">
            {cars.map(car => <Item {...car}></Item>)}
        </div>
    )
    
}





export default ItemListContainer;