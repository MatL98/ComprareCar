import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Item } from '../ItemListContainer/Item'
import Navbar from './NavBar'


export const Suvs = ({car}) =>{
    /* const categoria = 'suv'
    const carss = database.collection('cars')
                .where('category', "==", categoria);

        carss.get().then((query)=> setCars(query.docs.map(doc => {
            return {...doc.data(), id: doc.id};
        })))

    
    
    

    return(
        <>
        <Navbar/>
        <div className="grid-container">
                {car.length ? (
                    car.map((cars) => <Item car ={cars} key={cars.id} />)
                ) : (
                    <h5>cargando</h5>
                )}
            </div>
        </>
    ) */
}