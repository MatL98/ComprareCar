import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
    const msToSeg = 1000;

    const urlPoke = "https://pokeapi.co/api/v2/pokemon?limit=5&offset=00";

    const [pokemon, setPokemon] = useState([]);
    const [listItems, setListItems] = useState([]);

    const getPokemon = () => {
    fetch(urlPoke)
        .then((res) => res.json())
        .then((data) => setPokemon(data.results));
    console.log();
    };

    useEffect(() => {
        getPokemon();
    }, []);

    const getList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(pokemon);
      }, msToSeg * 2);
    });
    };
    getList().then((resolve) => setListItems(resolve));

    const pokeurls = listItems.map((p) => p.url);
    console.log(pokeurls);
    return (
    <div className="grid-container">
        {listItems.map((poke) => (
        <Link key={poke.key} to={`pokemon/${pokemon.key}`}>
            <Item namePoke={poke.name}></Item>
        </Link>
        ))}
    </div>
);
};

export default ItemListContainer;
