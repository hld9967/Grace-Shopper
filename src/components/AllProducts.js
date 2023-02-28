import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { addItems, removeItems, updateItems } from './allItemsSlice';

function AllProducts() {
  const allProducts = useSelector(state => state.allItems);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItems({ id: allProducts.length + 1, name: 'New Item' }));
  };

  const handleRemoveItem = item => {
    dispatch(removeItems({ id: item.id }));
  };

  const handleUpdateItem = item => {
    dispatch(updateItems(item));
  };

  return (
    <div>
      <h1>All Items</h1>
      <ul>
        {allProducts.map(item => (
          <li key={item.id}>
            <input type="text" value={item.name} onChange={e => handleUpdateItem({ ...item, name: e.target.value })} />
            <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default AllProducts;

