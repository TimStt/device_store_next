import { DevicesTypes, stateProductFetchTypes } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const productfetch = createAsyncThunk(
  "product/fetchDeviceProduct",
  async () => {
    const API_URL = "https://fakestoreapi.com/products";
    const { data } = await axios.get(API_URL);

    return data;
  }
);

const initialState: stateProductFetchTypes = {
  products: [] || {},
  status: "loading",
};

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
      .addCase(productfetch.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
        console.log("успешно");
      })
      .addCase(productfetch.pending, (state) => {
        state.products = [];
        state.status = "loading";
        console.log("загрузка");
      })
      .addCase(productfetch.rejected, (state) => {
        state.products = [];
        state.status = "success";
        console.log("ошибка");
      });
  },
});

// Action creators are generated for each case reducer function
export const { setItem } = productInfoSlice.actions;

export default productInfoSlice.reducer;
