import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [toggle, toggleChange] = useState(false);

  const appClass = toggle ? "App dark" : "App light"
  
  function toggleMode(){
    toggleChange((toggle)=>!toggle)
  }

  function toggleButtonText (appClass){
    if(appClass === "App dark"){
      return "Light Mode"
    }
    else return "Dark Mode"
  }
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleMode}>{toggleButtonText(appClass)}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
