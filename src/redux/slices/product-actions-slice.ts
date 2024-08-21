import { changeItemOnDb } from "@/shared/api/change-item-on-db";
import { createItemOnDb } from "@/shared/api/create-item-on-db";
import { getOneDevice } from "@/shared/api/get-one-device";
import apiInstance from "@/shared/config/apiinstance";

import {
  IAddFieldDevice,
  IDevicesTypes,
  stateProductsActions,
  TUpdatedFieldDevice,
} from "@/shared/types/products";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";
import toast from "react-hot-toast";

export const getOneProductThunk = createAsyncThunk(
  "productActions/getOneProductActions",
  async (id: string) => await getOneDevice(id)
);

export const productChangeThunk = createAsyncThunk(
  "productActions/productChangeActions",
  async (product: TUpdatedFieldDevice) =>
    await changeItemOnDb(product.id, product)
);

export const productDeleteThunk = createAsyncThunk(
  "productActions/productDeleteActions",
  async (id: string) => await apiInstance.delete(`/products/${id}`)
);

export const productAddThunk = createAsyncThunk(
  "productActions/productAddActions",
  async (product: IAddFieldDevice) => await createItemOnDb("products", product)
);

const initialState: stateProductsActions = {
  product: null,
  getLoading: false,
  addLoading: false,
  deleteLoading: false,
  changeLoading: false,
};

export const productActionsSlice = createSlice({
  name: "productActions",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<IDevicesTypes>) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
        HYDRATE,
        (state, { payload }) => {
          if (payload.productsActions) {
            state.getLoading = payload.productsActions.getLoading;
          }
        }
      )

      .addCase(getOneProductThunk.fulfilled, (state, action) => {
        state.product = action.payload;

        state.getLoading = false;
      })
      .addCase(getOneProductThunk.pending, (state) => {
        state.getLoading = true;
      })
      .addCase(getOneProductThunk.rejected, (state) => {
        state.getLoading = false;
      })
      .addCase(productChangeThunk.fulfilled, (state) => {
        state.changeLoading = false;
      })
      .addCase(productChangeThunk.pending, (state) => {
        state.changeLoading = true;
      })
      .addCase(productChangeThunk.rejected, (state) => {
        state.changeLoading = false;
      })
      .addCase(productDeleteThunk.fulfilled, (state) => {
        state.deleteLoading = false;
      })
      .addCase(productDeleteThunk.pending, (state) => {
        state.deleteLoading = true;
      })
      .addCase(productDeleteThunk.rejected, (state) => {
        state.deleteLoading = false;
      })
      .addCase(productAddThunk.fulfilled, (state) => {
        state.addLoading = false;
        toast.success("Продукт добавлен успешно");
      })
      .addCase(productAddThunk.pending, (state) => {
        state.addLoading = true;
      })
      .addCase(productAddThunk.rejected, (state) => {
        state.addLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { setItem } = productActionsSlice.actions;

export default productActionsSlice.reducer;
