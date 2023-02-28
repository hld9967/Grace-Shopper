import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addItems, removeItems, updateItems } from './allItemsSlice';

function AllItems() {
  const allItems = useSelector(state => state.allItems);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItems({ id: allItems.length + 1, name: 'New Item' }));
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
        {allItems.map(item => (
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

export default AllItems;
