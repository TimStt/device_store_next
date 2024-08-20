import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IDevicesTypes,
  IStateChangeDevice,
  TUpdatedFieldDevice,
} from "@/shared/types/products";
import { getOneProductThunk } from "./product-actions-slice";
import { IResultCheckValidateImage, TImageUpdate } from "@/shared/types/api";

const initialState: IStateChangeDevice = {
  updatedFieldDevice: null,
  changeImage: null,
};

export const changeDeviceSlice = createSlice({
  name: "changeDevice",
  initialState,
  reducers: {
    setUpdatedFieldDevice: (
      state,
      action: PayloadAction<TUpdatedFieldDevice>
    ) => {
      state.updatedFieldDevice = action.payload;
    },

    setSrcImageUpdate: (state, action: PayloadAction<TImageUpdate>) => {
      state.changeImage = action.payload;
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(
    //   getOneProductThunk.fulfilled,
    //   (state, action: PayloadAction<IDevicesTypes>) => {
    //     state.updatedFieldDevice = {
    //       ...action.payload,
    //       id: action.payload.id,
    //       image: action.payload.image,
    //       description: action.payload.description,
    //       price: action.payload.price,
    //       title: action.payload.title,
    //     };
    //   }
    // );
  },
});

export const { setUpdatedFieldDevice, setSrcImageUpdate } =
  changeDeviceSlice.actions;

export default changeDeviceSlice.reducer;
