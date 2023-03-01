import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSinglePotion = createAsyncThunk(
  "singlePotion",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/potions/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);


const singlePotionSlice = createSlice({
  name: "singlePotion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePotion.fulfilled, (state, action) => {
        state.info = action.payload;
      });
  },
});

export const selectSinglePotion = (state) => {
  return state.singlePotion;
};

export default singlePotionSlice.reducer;
