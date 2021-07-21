import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Navbar from './NavBar'


export const Autos = () =>{
    return(
        <>
        <Navbar/>
        <div><h2>Autos</h2></div>
        </>
    )
}