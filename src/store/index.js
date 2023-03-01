import { configureStore } from '@reduxjs/toolkit';
import { allProductsSlice } from '../features/allProductSlice';
import { singleProductSlice } from '../features/singleProductSlice';



const store = configureStore({
    reducer: {
      allProducts: allProductsSlice,
      singleProduct: singleProductSlice
    },
  });


export default store;

