import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import Navbar from '../NavBar/NavBar'

export const ItemDetail = () =>{
    const url1 = 'https://pokeapi.co/api/v2/pokemon/1/'
    const [infoPokemon, setInfoPokemon] = useState([])
    const getInfoPokemons = () =>{
        fetch(url1)
        .then(res => res.json())
        .then(data => {setInfoPokemon(data)})
    }
    
    
    useEffect(()=>{
        getInfoPokemons()
    }, [])

    return(
        <>
        <Navbar/>
        <div className="itemDetails">
            <h2>id: {infoPokemon.id}</h2>
            <h2>Nombre {infoPokemon.name}</h2>
        </div>
        </>    
    )
}