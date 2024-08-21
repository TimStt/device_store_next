import { createSelector } from "@reduxjs/toolkit";

export const selectBasketProducts = (state: RootState) =>
  state.basket.busketProduct;

export const selectTotalPrice = (state: RootState) => state.basket.totalPrice;
export const selectTotalCount = (state: RootState) => state.basket.totalCount;

export const selectProductById = (id: string) =>
  createSelector([selectBasketProducts], (products) =>
    products.find((product) => product.id === id)
  );
