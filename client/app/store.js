import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import armorsSlice from '../../src/features/allArmorSlice'
import allProductsSlice from '../../src/features/allProductsSlice';
import singleProductSlice from '../../src/features/singleProductSlice';


const store = configureStore({
  reducer: { auth: authReducer,
    allProducts: allProductsSlice,
    singleProduct: singleProductSlice,

    armors: armorsSlice, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
