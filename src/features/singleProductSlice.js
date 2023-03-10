import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

<<<<<<< HEAD
const initialState = [];
=======
const initialState = []
>>>>>>> e2bf035173440cdc994f0a3cdb9bfebc360cf0e8

export const fetchSingleProductAsync = createAsyncThunk(
  "singleProduct",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/singleproduct/${id}`);
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleProduct = (state) => {
  return state.singleProduct;
};
export default singleProductSlice.reducer;
