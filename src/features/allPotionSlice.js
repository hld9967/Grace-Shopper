import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPotionsAsync = createAsyncThunk(`All Potions`, async () => {
  try {
    const { data } = await axios.get(`/api/potions`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

const potionsSlice = createSlice({
    name: "potions",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchPotionsAsync.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });
  
  export const selectPotions = (state) => {
    return state.potions;
  };
  
  export default potionsSlice.reducer;