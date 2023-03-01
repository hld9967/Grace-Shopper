import { configureStore } from '@reduxjs/toolkit';
// import armorsSlice  from '../features/allArmorSlice'
// import potionsSlice from '../features/allPotionSlice'

const store = configureStore({
    reducer: {
      items: itemsReducer,
      item: itemReducer,


      // armors: armorsSlice,
      // potions: potionsSlice
    },
  });

