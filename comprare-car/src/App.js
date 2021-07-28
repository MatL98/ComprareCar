import Navbar from "./components/NavBar/NavBar";
import React, { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Autos } from "./components/NavBar/Autos";
import { Suv } from "./components/NavBar/Suv";
import ItemDetailContainer from "./components/ItemsDetails/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/categoria/coupe">
            <Autos/>
          </Route>
          <Route exact path="/categoria/suv">
            <Suv/>
          </Route>
          <Route exact path="/item/:${car.id}">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
