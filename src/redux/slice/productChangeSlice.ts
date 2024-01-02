import { DevicesTypes, stateProductFetchTypes } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const productfetch = createAsyncThunk(
  "product/fetchProductChange",
  async ({ id }: { id: string }) => {
    const API_URL = `https://6555201463cafc694fe778bf.mockapi.io/devices/${id}`;
    const { data } = await axios.get(API_URL);

    return data;
  }
);
export const productChangefetch = createAsyncThunk(
  "product/fetchProductPost",
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

const initialState: stateProductFetchTypes = {
  product: [],
  getStatus: "loading",
  postStatus: "loading",
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
        console.log("успешно получены данные");
      })
      .addCase(productfetch.pending, (state) => {
        state.getStatus = "loading";
        console.log("загрузка полученных данных");
      })
      .addCase(productfetch.rejected, (state) => {
        state.getStatus = "error";
        console.log("ошибка полученных данных");
      })
      .addCase(productChangefetch.fulfilled, (state, action) => {
        state.product = [];
        state.postStatus = "success";
        console.log("успешно отправлены данные");
      })
      .addCase(productChangefetch.pending, (state) => {
        state.postStatus = "loading";
        console.log("загрузка отправленных данных");
      })
      .addCase(productChangefetch.rejected, (state) => {
        state.postStatus = "error";
        console.log("ошибка отправки данных ");
      })
      .addCase(productDeletefetch.fulfilled, (state, action) => {
        state.postStatus = "success";
        console.log("успешно удалены данные");
      })
      .addCase(productDeletefetch.pending, (state) => {
        state.postStatus = "loading";
        console.log("загрузка удаляемых данных");
      })
      .addCase(productDeletefetch.rejected, (state) => {
        state.postStatus = "error";
        console.log("ошибка удаления данных ");
      });
  },
});

// Action creators are generated for each case reducer function
export const { setItem } = productChangeSlice.actions;

export default productChangeSlice.reducer;
