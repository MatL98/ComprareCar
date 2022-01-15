import Navbar from "./components/NavBar/NavBar";
import React from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
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
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/coupe" element={<Autos />} />
          <Route exact path="/categoria/suv" element={<Suv />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
