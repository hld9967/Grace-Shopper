import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchArmorsAsync = createAsyncThunk(`All Armor`, async () => {
  try {
    const { data } = await axios.get(`/api/armors`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const createArmorAsync = createAsyncThunk(`Create Armor`, async ({ name, imageUrl, description, price }) => {
  const { data } = await axios.post(`/api/armors`, {
    name,
    imageUrl,
    description,
    price
  });
  return data;
}
);

const armorsSlice = createSlice({
  name: "armors",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArmorsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectArmors = (state) => {
  return state.armors;
};

export default armorsSlice.reducer;