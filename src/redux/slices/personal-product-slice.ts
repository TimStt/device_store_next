import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

import {
  IDevicesWithImagePlaceholder,
  IPersonalProductState,
} from "@/shared/types/ui";
import { IDevicesTypes } from "@/shared/types/products";
import { HYDRATE } from "next-redux-wrapper";

const initialState: IPersonalProductState = {
  device: null,
};

export const personalProductSlice = createSlice({
  name: "personalProduct",
  initialState,
  reducers: {
    setPersonalProducts: (
      state,
      action: PayloadAction<IDevicesWithImagePlaceholder | null>
    ) => {
      state.device = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => {
        if (payload.personalProduct) {
          state.device = payload.personalProduct.device;
        }
      }
    );
  },
});

export const { setPersonalProducts } = personalProductSlice.actions;

export default personalProductSlice.reducer;
