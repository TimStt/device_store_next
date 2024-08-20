import { getDevices } from "@/shared/api/get-devices";
import { IStateProductsListAdmin } from "@/shared/types/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getListAdminThunk = createAsyncThunk(
  "products/getListAdmin",
  async () => await getDevices()
);

const initialState: IStateProductsListAdmin = {
  products: [],
  loading: false,
};
//ts.ignore
export const listDevicesAdminSlice = createSlice({
  name: "listDevicesAdmin",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListAdminThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getListAdminThunk.pending, (state) => {
        state.products = [];
        state.loading = true;
      })
      .addCase(getListAdminThunk.rejected, (state) => {
        state.products = [];
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setItem } = listDevicesAdminSlice.actions;

export default listDevicesAdminSlice.reducer;
