import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Navbar from '../NavBar/NavBar'


export const CategoryNavBar = () =>{
    return(
        <>
        <Navbar/>
        <div><h2>Categorias</h2></div>
        </>
    )
}