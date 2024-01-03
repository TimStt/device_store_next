import { DevicesTypes, stateProductFetchTypes } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const productfetch = createAsyncThunk(
  "product/fetchProductGet",
  async ({ id }: { id: string }) => {
    const API_URL = `https://6555201463cafc694fe778bf.mockapi.io/devices/${id}`;
    const { data } = await axios.get(API_URL);

    return data;
  }
);
export const productChangefetch = createAsyncThunk(
  "product/fetchProductChange",
  async ({ isValue: product }: { isValue: DevicesTypes }) => {
    const { id, rating, ...otherProduct } = product;
    const API_URL = `https://6555201463cafc694fe778bf.mockapi.io/devices/${id}`;
    const { data } = await axios.put(API_URL, otherProduct);

    return data;
  }
);
export const productDeletefetch = createAsyncThunk(
  "product/fetchProductDelete",
  async ({ id }: { id: string }) => {
    const API_URL = `https://6555201463cafc694fe778bf.mockapi.io/devices/${id}`;
    const { data } = await axios.delete(API_URL);

    return data;
  }
);

export const productPostfetch = createAsyncThunk(
  "product/fetchProductPost",
  async ({ value: product }: { value: DevicesTypes }) => {
    const API_URL = `https://6555201463cafc694fe778bf.mockapi.io/devices`;
    const { data } = await axios.post(API_URL, product);

    return data;
  }
);

const initialState: stateProductFetchTypes = {
  product: [],
  getStatus: "loading",
  postStatus: "loading",
  deleteStatus: "loading",
  putStatus: "loading",
};

export const productChangeSlice = createSlice({
  name: "productChange",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.product = [action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productfetch.fulfilled, (state, action) => {
        state.product[0] = action.payload;
        state.getStatus = "success";
      })
      .addCase(productfetch.pending, (state) => {
        state.getStatus = "loading";
      })
      .addCase(productfetch.rejected, (state) => {
        state.getStatus = "error";
      })
      .addCase(productChangefetch.fulfilled, (state) => {
        state.product = [];
        state.putStatus = "success";
      })
      .addCase(productChangefetch.pending, (state) => {
        state.putStatus = "loading";
      })
      .addCase(productChangefetch.rejected, (state) => {
        state.putStatus = "error";
      })
      .addCase(productDeletefetch.fulfilled, (state) => {
        state.deleteStatus = "success";
      })
      .addCase(productDeletefetch.pending, (state) => {
        state.deleteStatus = "loading";
      })
      .addCase(productDeletefetch.rejected, (state) => {
        state.deleteStatus = "error";
      })
      .addCase(productPostfetch.fulfilled, (state) => {
        state.postStatus = "success";
      })
      .addCase(productPostfetch.pending, (state) => {
        state.postStatus = "loading";
      })
      .addCase(productPostfetch.rejected, (state) => {
        state.postStatus = "error";
      });
  },
});

// Action creators are generated for each case reducer function
export const { setItem } = productChangeSlice.actions;

export default productChangeSlice.reducer;
