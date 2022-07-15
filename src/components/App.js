import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [itemName, setItemName] = useState("");
  // const [itemCategory, setItemCategory] = useState("Produce");

  // const newItem = {
  //   id: uuid(), 
  //   name: itemName,
  //   category: itemCategory

  // }

  // const newDataArray = [...items, newItem]
  
  // function handleNewItemName(e){
  //   setItemName(e.target.value);
  // }

  // function handleNewItemCategory(e){
  //   setItemCategory(e.target.value);
  // }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
// // newly added
//   function handleNewItem(){
//     setItems()
//   }
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
