import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onNewItemName, onNewItemCategoryName, onItemFormSubmit}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={onNewItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onClick={onNewItemCategoryName}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
