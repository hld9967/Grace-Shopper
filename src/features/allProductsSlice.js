import { createSlice } from '@reduxjs/toolkit';

const allItemsSlice = createSlice({
  name: 'allItems',
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);
    },
    removeItems: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateItems: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { addItems, removeItems, updateItems } = allItemsSlice.actions;

export default allItemsSlice.reducer;
