import React from "react";

const ItemCount = ({ stock, initital, count, setCount }) => {

  function addOn() {
    if (initital >= 1 && count < stock) {
        setCount(count + 1);
    }
  }

  function remove() {
    if (count > 1) {
        setCount(count - 1);
    }
  }

  return (
    <div className="counter">
        <button onClick={remove} className="minus">
        -
        </button>
        <h3>{count}</h3>
        <button onClick={addOn} className="plus">
        +
        </button>
    </div>
  );
};

export default ItemCount;
