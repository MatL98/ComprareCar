import Navbar from './components/NavBar/NavBar';
import React, {
  useEffect,
  useState
} from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";
import { ItemDetail } from './components/ItemsDetails/ItemDetail';
import './App.css';
import { MotosNavBar } from './components/NavBar/MotosNavBar';
import { Contacto } from './components/NavBar/Contacto';
import { Autos } from './components/NavBar/Autos';
import {Loader} from './components/Loader/Loader'






function App() {



  return (
  <BrowserRouter >
    <Switch >
      <Route exact path="/" >
      <div className = "App" >
      <Navbar/>
      <ItemListContainer/>
      </div>  
      </Route>
      <Route exact path="/autos">
        <Autos/>
        <ItemListContainer/>
      </Route>
      <Route exact path="/motos">
        <MotosNavBar/>
      </Route>
      <Route exact path="/contacto">
        <Contacto/>
      </Route>
      <Route exact path="/pokemon/:key">
        <ItemDetail/>
      </Route>
    </Switch> 
  </BrowserRouter>
  );
}

export default App;