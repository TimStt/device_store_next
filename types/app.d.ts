declare global {
  // fsd required
  declare type RootState = import("@/redux/store").RootState;
  declare type AppDispatch = import("@/redux/store").AppDispatch;
}

export {};
