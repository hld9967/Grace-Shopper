import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../features/allProductsSlice';

const addProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleNameChanged = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChanged = (e) => {
    setDescription(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductAsync({ name, address }));
    setName('');
    setAddress('');
  };

  return (
    <section>
      <h3>Add New Product</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="campusName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={name}
          onChange={handleNameChanged}
        />
        <label htmlFor="productDescription"> Product Description</label>
        <input
          type="text"
          id="productDescription"
          value={description}
          onChange={handleDescriptionChanged}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default addProduct;