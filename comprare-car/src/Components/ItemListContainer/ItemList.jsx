import React from 'react'
import { Item } from './Item'



export const ItemList = ({carToDisplay})=>{
    return carToDisplay.map((item)=> <Item car={item.id} key="item.id"}/>)
} 