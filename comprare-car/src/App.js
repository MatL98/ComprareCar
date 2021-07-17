import Navbar from './components/NavBar/NavBar';
import React, { useState } from 'react';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BotonColorido from './components/BotonColor';
import './App.css';




function App() {


  return (
    <div className="App">
    <Navbar/>
    

    <ItemListContainer/>
    <BotonColorido/>
    
    </div>
    
  );
}

export default App;
