import { ICatalog, IDevicesTypes } from "@/shared/types/products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState: ICatalog = {
  catalogProducts: [],
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalogProducts: (state, action: PayloadAction<IDevicesTypes[]>) => {
      state.catalogProducts = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => {
        if (payload.catalog) {
          state.catalogProducts = payload.catalog.catalogProducts;
        }
      }
    );
  },
});

export const { setCatalogProducts } = catalogSlice.actions;

export default catalogSlice.reducer;
