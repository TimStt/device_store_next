import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction,
} from "@reduxjs/toolkit";
import productsActions from "./slices/product-actions-slice";
import listDevicesAdmin from "./slices/list-devices-admin-slice";
import basket from "./slices/basket-slice";
import changeDevice from "./slices/change-device-slice";
import { createWrapper } from "next-redux-wrapper";
import catalog from "./slices/catalog-slice";
import personalProduct from "./slices/personal-product-slice";
import user from "./slices/user-slice";
import mobileMenuModal from "./slices/mobile-menu-modal";

const reducer = combineReducers({
  productsActions,
  listDevicesAdmin,
  basket,
  changeDevice,
  catalog,
  personalProduct,
  user,

  mobileMenuModal,
});

export const makeStore = () => {
  const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  return store;
};

export type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const wrapper = createWrapper(makeStore, { debug: true });
