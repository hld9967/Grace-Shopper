import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPotionsAsync = createAsyncThunk(`All Potion`, async () => {
  try {
    const { data } = await axios.get(`/api/potions`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const createPotionAsync = createAsyncThunk( `Create Potion`, async ({ name, imageUrl, description, price}) => {
    const { data } = await axios.post(`/api/potions`, {
      name,
      imageUrl,
      description,
      price
    });
    return data;
  }
);

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