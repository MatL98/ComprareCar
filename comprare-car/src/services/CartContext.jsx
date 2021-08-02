import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const addToItem = (item) =>{
        setCarrito([...carrito, item])
    }
    const removeitem = (id)=>{
        setCarrito(carrito.filter(prod => prod.id !== id))
    }
    const totalCart = () => {
        return carrito.reduce((acc, prodCar) => acc + (prodCar.price * prodCar.cantidad), 0)
    }
    const totalCantidad = () => {
        return carrito.reduce((acc, prodCar) => acc +  prodCar.cantidad, 0)
    }


    return <CartContext.Provider value={{carrito, addToItem, removeitem, totalCantidad, totalCart}}>
        {children}
    </CartContext.Provider>

}
