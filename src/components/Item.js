import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart]=useState(false)
  const cartStatus = inCart ? "Remove From Cart" : "Add To Cart";
  const cartClassStatus = inCart ?  "in-cart" :"add" ;
  function addButton(){
    setInCart((inCart)=>!inCart)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addButton} className={cartClassStatus}>{cartStatus}</button>
    </li>
  );
}

export default Item;
