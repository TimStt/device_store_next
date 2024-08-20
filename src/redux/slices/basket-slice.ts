import {
  IDevicesInBasket,
  IDevicesTypes,
  IStateBasket,
} from "@/shared/types/products";
import { addProductByLS } from "@/shared/utils/add-product-by-LS/util";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState: IStateBasket = {
  totalPrice: 0,
  totalCount: 0,

  busketProduct: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setProductsBasket: (state, action: PayloadAction<IDevicesInBasket[]>) => {
      state.busketProduct = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },

    cleanBusket: (state) => {
      state.busketProduct = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      addProductByLS(state.busketProduct, "basket");
    },
  },
});

export const {
  cleanBusket,

  setProductsBasket,

  setTotalPrice,
  setTotalCount,
} = basketSlice.actions;

export default basketSlice.reducer;
