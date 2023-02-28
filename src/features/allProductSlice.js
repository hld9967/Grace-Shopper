import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsAsync = createAsyncThunk("allProducts", async () => {
  try {
    const { data } = await axios.get(`/api/allProducts`);
    return data;
  } catch (err) {
    console.log(err);
  }
});
// create an async thunk to edit a Product by ID
export const editProductAsync = createAsyncThunk(
  "todos/editTodo",
  async ({ id, name, description, price }) => {
    const { data } = await axios.put(`/api/allProducts/${id}`, {  // use axios to make a PUT request to the specified URL with the provided Product ID and data to update
      name,
      description,
      price
    });
    console.log("After axios put");  // print a message to the console
    return data;  // return the updated data
  });

export const addProductAsync = createAsyncThunk(
  "allProducts/addProduct",
  async ({ name, description, price, }) => {
    const { data } = await axios.post(`/api/allProducts`, {
      name,
      description,
      price
    });
    return data;
  }
);

export const deleteProductAsync = createAsyncThunk(
  "allProducts/deleteProduct",
  async (id) => {
    const { data } = await axios.delete(
      `/api/allProducts/${id}`
    );
    return data;
  }
);


// handle the fulfilled action of the deleteTodoAsync async thunk
//return {};  // set the state to an empty object

// create a slice of the Redux store for managing a single todo item
export const allProductsSlice = createSlice({
  name: 'allProducts',  // specify the name of the slice
  initialState: {},  // set the initial state of the slice to an empty object
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {  // handle the fulfilled action of the fetchSingleTodoAsync async thunk
      return action.payload;  // set the state to the retrieved data
    });
    builder.addCase(editProductAsync.fulfilled, (state, action) => {  // handle the fulfilled action of the editTodoAsync async thunk
      return action.payload;  // set the state to the updated data
    });
    builder.addCase(addProductAsync.fulfilled, (state, action) => {  // Handling the success case of the add todo asynchronous thunk
      state.push(action.payload);
    });
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      const newState = state.filter((product) => product.id !== action.payload.id);
      return newState;
    });
  },
});

// Selector to return products state
export const selectProducts = (state) => state.products;

export default allProductsSlice.reducer;
