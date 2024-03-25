import { DevicesTypes, RootStateBasket, stateBasket } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: stateBasket = {
  totalPrice: 0,
  totalCount: 0,

  busketProduct: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id: addId } = action.payload;

      const isFind = state.busketProduct.find(({ id }) => id === addId);

      if (isFind) {
        isFind.count!++;
      } else {
        state.busketProduct.push({
          ...action.payload,
          count: 1,
        });
      }
      culcTotalCount(state);
      culcTotalPrice(state);
    },

    subCount: (state, action) => {
      const idSub = action.payload;
      const updateObject = state.busketProduct.find((_, id) => id === idSub);

      switch (updateObject?.count) {
        case 1:
          state.busketProduct.splice(idSub, 1);
          break;
        default:
          if (updateObject?.count) updateObject.count--;
      }
      culcTotalCount(state);
      culcTotalPrice(state);
    },
    addCount: (state, action) => {
      const findProduct = state.busketProduct.find(
        (_, id) => id === action.payload
      );
      if (findProduct) findProduct.count!++;

      culcTotalCount(state);
      culcTotalPrice(state);
    },
    delItem: (state, action) => {
      state.busketProduct.splice(action.payload, 1);
      culcTotalCount(state);
      culcTotalPrice(state);
    },
    cleanBusket: (state) => {
      state.busketProduct = [];
      culcTotalCount(state);
      culcTotalPrice(state);
    },
  },
});

const culcTotalCount = (state: stateBasket) => {
  state.totalCount = state.busketProduct.reduce(
    (acc, { count }) => acc + count!,
    0
  );
};

const culcTotalPrice = (state: stateBasket) => {
  let { totalPrice } = state;
  totalPrice = state.busketProduct.reduce(
    (acc, { price, count }) => acc + price! * count!,
    0
  );

  state.totalPrice = +totalPrice.toFixed(1);
};

export const selectBasket = (state: RootStateBasket) => state.basket;
export const selectProductById =
  (id: string) =>
  ({ basket }: RootStateBasket) =>
    basket.busketProduct.find((product) => product.id === id);

export const {
  addItem,
  cleanBusket,
  delItem,

  subCount,
  addCount,
} = basketSlice.actions;

export default basketSlice.reducer;
