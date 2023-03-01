import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import {addProductAsync, editProductAsync, deleteProductAsync} from "../features/allProductsSlice"

function AllProducts() {
  const allProducts = useSelector(state => state.allProducts);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProductAsync({ id: allProducts.length + 1, name: 'New Product' }));
  };

  const handleRemoveProduct = Product => {
    dispatch(deleteProductAsync({ id: Product.id }));
  };

  const handleUpdateProduct = Product => {
    dispatch(editProductAsync(Product));
  };

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {allProducts.map(Product => (
          <li key={Product.id}>
            <input type="text" value={Product.name} onChange={e => handleUpdateProduct({ ...Product, name: e.target.value })} />
            <button onClick={() => handleRemoveProduct(Product)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default AllProducts;

