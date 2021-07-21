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
import { CategoryNavBar } from './components/NavBar/CategoryNavBar';



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
      <Route exact path="/category/:1">
        <CategoryNavBar/>
      </Route>
      <Route exact path="/pokemon/:key">
        <ItemDetail/>
      </Route>
    </Switch> 
  </BrowserRouter>
  );
}

export default App;