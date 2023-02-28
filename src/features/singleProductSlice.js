import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "singleStudent",
  async id => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      // console.log(data)
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);
const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleProduct = state => {
  return state.singleProduct;
};
export default singleProductSlice.reducer;
