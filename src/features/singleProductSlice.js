import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProductAsync = createAsyncThunk(
  "singleProduct",
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

export const createProductAsync = createAsyncThunk(
  "product/add",
  async ({ name, imageUrl, description, price }) => {
    try {
      const { data } = await axios.post("/api/products", {
        name,
        imageUrl,
        description,
        price
      });
      return data;
    } catch (error) {
      console.error("Error creating product: ", error);
      throw error; // re-throw the error to trigger the rejected state of the thunk
    }
  }
);

export const removeProductAsync = createAsyncThunk("product/delete", async id => {
  try {
    const { data } = await axios.delete(`/api/products/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});


const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createProductAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(removeProductAsync.fulfilled, (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    });
  },
});


export const selectSingleProduct = state => {
  return state.singleProduct;
};
export default singleProductSlice.reducer;
