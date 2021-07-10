import Navbar from './components/NavBar/NavBar';
import ItemList from './components/ItemList/ItemListContainer'
import ItemCount from './components/ItemList/ItemCount/ItemCount';
import React, { useState } from 'react';


import './App.css';


function App() {

  return (
    <div className="App">
    <Navbar/>
    
    <ItemCount initital={1} stock={8}></ItemCount>
    {/* <ItemList saludo = "Bienvenido a nuestra tienda de autos" ></ItemList> */}
    </div>
    
  );
}

export default App;
