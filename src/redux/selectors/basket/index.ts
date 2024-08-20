export const selectBasketProducts = (state: RootState) =>
  state.basket.busketProduct;

export const selectTotalPrice = (state: RootState) => state.basket.totalPrice;
export const selectTotalCount = (state: RootState) => state.basket.totalCount;

export const selectProductById = (id: string) => (state: RootState) =>
  state.basket.busketProduct.find(({ id: productId }) => productId === id);
