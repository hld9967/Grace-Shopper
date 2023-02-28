import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchItemAsync = createAsyncThunk("allitems", async () => {
  try {
    const { data } = await axios.get(`/api/allitems`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addItemAsync = createAsyncThunk(
  "/singleItem/add",
  async ({ name, address }) => {
    const { data } = await axios.post(`/api/item/`, { name, description, price,  });
    return data;
  }
);

export const deleteItemAsync = createAsyncThunk(
  "/singleItem/delete",
  async () => {
    await axios.delete(`/api/item/${id}`);
    return id; // return the id of the deleted item
  }
);

const singleItemSlice = createSlice({
  name: 'singleItem',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    updateItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { addItem, removeItem, updateItem } = singleItemSlice.actions;

export default singleItemSlice.reducer;