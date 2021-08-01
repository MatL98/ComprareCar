import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const addToItem = (item) =>{
        setCarrito([...carrito, item])
    }
    const removeitem = (item)=>{
        setCarrito(...carrito)
    }

    return <CartContext.Provider value={{carrito, addToItem, removeitem}}>
        {children}
    </CartContext.Provider>

}
