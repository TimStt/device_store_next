import { stateProductsFetchTypes } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const productsfetch = createAsyncThunk(
  "products/fetchDeviceProduct",
  async () => {
    const API_URL = `https://6555201463cafc694fe778bf.mockapi.io/devices`;
    const { data } = await axios.get(API_URL);

    return data;
  }
);

const initialState: stateProductsFetchTypes = {
  products: [],
  status: "loading",
};
//ts.ignore
export const productInfoSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsfetch.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
        console.log("успешно");
      })
      .addCase(productsfetch.pending, (state) => {
        state.products = [];
        state.status = "loading";
        console.log("загрузка");
      })
      .addCase(productsfetch.rejected, (state) => {
        state.products = [];
        state.status = "success";
        console.log("ошибка");
      });
  },
});

// Action creators are generated for each case reducer function
export const { setItem } = productInfoSlice.actions;

export default productInfoSlice.reducer;
