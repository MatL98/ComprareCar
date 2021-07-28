import React, {createContext, useContext, useState} from 'react'

export const CartContext = createContext();
export const DataProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const noneCart= (receivedItem) => cart.filter(item => item.id === receivedItem.id).length ===0;

    const addToCart = (receivedItem) =>{

        if(noneCart(receivedItem)){
            setCart([...cart,receivedItem]);
        } else{
            alert("este item ya esta en el carrito")
        }
    }

    const removeCart = (receivedItem) =>{
        let allItems = cart.filter(item => item.id != receivedItem.id)
        setCart(allItems)
    }

    const clear = ()=> setCart([])

    return (
        <useContext.Provider value ={{cart, setCart}}>
            {children}
        </useContext.Provider>
    )
}