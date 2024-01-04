import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./slice/productInfoSlice";
import changeProducts from "./slice/productChangeSlice";
import basket from "./slice/basketSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

// ...

const parsisConfig = {
  key: "root",
  storage: storageSession,
};

const reducer = combineReducers({
  products,
  changeProducts,
  basket,
});

const parsisReducer = persistReducer(parsisConfig, reducer);

export const store = configureStore({
  reducer: parsisReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
