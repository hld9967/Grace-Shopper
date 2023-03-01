import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../features/allProductSlice';

const addProduct = () => {
  const [name, setName] = useState('');
  const [discription, setDiscription] = useState('');
  const []
  const dispatch = useDispatch();

  const handleNameChanged = (e) => {
    setName(e.target.value);
  };

  const handleDiscriptionChanged = (e) => {
    setDiscription(e.target.value);
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
        <label htmlFor="campusName">Campus Name:</label>
        <input
          type="text"
          id="campusName"
          value={name}
          onChange={handleNameChanged}
        />
        <label htmlFor="campusAddress"> Campus Address:</label>
        <input
          type="text"
          id="campusAddress"
          value={address}
          onChange={handleAddressChanged}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default addProduct;