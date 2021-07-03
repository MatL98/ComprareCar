import React from "react";
import moment from 'moment';
moment.locale('es');








const fecha = moment();
const formato = 'dddd / MMMM  / YYYY';
const hora = moment();
const formato1 = 'h : m : s';
console.log(fecha.format(formato))
const ItemList = (onClick) => {
    return (
        <h2>Hiciste click el dia {fecha.format(formato)} a la hora {hora.format(formato1)}</h2>
    )
}

/* const ItemList = (prop) => {
    return (
        <h2>{prop.saludo}</h2>
        
    )

} */

export default ItemList;