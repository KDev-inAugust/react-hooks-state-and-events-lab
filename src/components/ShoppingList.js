import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, changeFilter] = useState("All")


  const filterValue=items.filter((item)=>
  {if (selectedCategory !== "All") {
    return item.category===selectedCategory}
    else {return items}})


    console.log(filterValue)

  
    

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>changeFilter(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterValue.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
