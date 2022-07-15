import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const [itemsData, setItemsData] = useState(items)

  
  
  function handleNewItemName(e){
    setItemName(e.target.value);
  }

  function handleNewItemCategory(e){
    setItemCategory(e.target.value);
  }

  function handleAddNewItem(e){

    e.preventDefault();
    const newItem = {
      id: uuid(), 
      name: itemName,
      category: itemCategory
  
    }
  
    const newDataArray = [...itemsData, newItem];
    setItemsData(newDataArray);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(e){
    setSearch(e.target.value);
  }
  const itemsToDisplay = itemsData
  .filter((item)=> item.name.includes(search))
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  

  return (
    <div className="ShoppingList">
      <ItemForm onNewItemName={handleNewItemName} onNewItemCategoryName ={handleNewItemCategory} onItemFormSubmit={handleAddNewItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} search={search}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
