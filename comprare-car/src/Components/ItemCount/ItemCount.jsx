import React, { useState } from 'react';




const ItemCount = ({stock, initital}) => {
    const [count, setCount] = useState(0);
    console.log(stock);



    function addOn(){
        if(initital >= 1 && count < stock){
            setCount(count + 1);
        }
    }
    
    function remove(){
        if(count > 1){
            setCount(count - 1);
            }
        }

        return (<div className="counter">
                    <h3>Cantidad: {count}</h3>
                    <button onClick = {remove} className="minus">-</button>
                    
                    <button onClick = {addOn} className="plus">+</button>
                    
                </div>)

}




export default ItemCount;