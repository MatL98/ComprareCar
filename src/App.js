import Navbar from "./components/NavBar/NavBar";
import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Autos } from "./components/NavBar/Autos";
import { Suv } from "./components/NavBar/Suv";
import ItemDetailContainer from "./components/ItemsDetails/ItemDetailContainer";
import { CartProvider } from "./services/CartContext";
import Cart from "./components/Cart/Cart";
import { Footer } from "./components/Footer/Footer";




function App() {
  return (
    <CartProvider>
    <BrowserRouter>
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
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
        </Switch>
        <Footer/>

    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
