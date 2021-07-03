import Navbar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemListContainer'
import React, { useState } from 'react';


import './App.css';


function App() {
  return (
    <div className="App">
    <>
    <div className="App">
    <Navbar/>
    <ItemList></ItemList>
    {/* <ItemList saludo = "Bienvenido a nuestra tienda de autos" ></ItemList> */}
    </div>
    </>
    </div>
  );
}

export default App;
