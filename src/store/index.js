import { configureStore } from '@reduxjs/toolkit';
// import armorsSlice  from '../features/allArmorSlice'
// import potionsSlice from '../features/allPotionSlice'
import { allProductsSlice } from '../features/allProductsSlice';
import { singleProductSlice } from '../features/singleProductSlice';



      



const store = configureStore({
    reducer: {
      allProducts: allProductsSlice,
      singleProduct: singleProductSlice

      // armors: armorsSlice,
      // potions: potionsSlice

    },
  });


export default store;

