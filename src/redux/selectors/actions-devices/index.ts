export const selectorAddLoading = (state: RootState) =>
  state.productsActions.addLoading;

export const selectorDeleteLoading = (state: RootState) =>
  state.productsActions.deleteLoading;

export const selectorChangeLoading = (state: RootState) =>
  state.productsActions.changeLoading;

export const selectorGetLoading = (state: RootState) =>
  state.productsActions.getLoading;

export const chooseDevice = (state: RootState) => state.productsActions.product;
