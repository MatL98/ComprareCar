import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Navbar from './NavBar'


export const MotosNavBar = () =>{
    return(
        <>
        <Navbar/>
        <div><h2>Categorias</h2></div>
        </>
    )
}