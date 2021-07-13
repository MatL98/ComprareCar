import Navbar from './components/NavBar/NavBar';
import React, { useState } from 'react';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';




function App() {


  return (
    <div className="App">
    <Navbar/>
    
    <ItemListContainer></ItemListContainer>
    <ItemCount initital={1} stock={8}></ItemCount>  
    </div>
    
  );
}

export default App;
