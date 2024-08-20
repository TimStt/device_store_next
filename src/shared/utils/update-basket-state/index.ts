import {
  setProductsBasket,
  setTotalCount,
  setTotalPrice,
} from "@/redux/slices/basket-slice";
import { IDevicesInBasket } from "@/shared/types/products";
import { addItemByLS } from "@/shared/utils/add-product-by-LS";
import { sumirizeNumberInArr } from "@/shared/utils/sumirize-number-in-arr";
import { Dispatch } from "@reduxjs/toolkit";

export const updateBasketState = (
  basketProducts: IDevicesInBasket[],
  dispatch: Dispatch
) => {
  console.log("basketProducts", basketProducts);
  console.log("totalPrice", sumirizeNumberInArr(basketProducts, "totalPrice"));
  dispatch(setTotalCount(sumirizeNumberInArr(basketProducts, "count")));
  dispatch(setTotalPrice(sumirizeNumberInArr(basketProducts, "totalPrice")));
  dispatch(setProductsBasket(basketProducts));
  addItemByLS(basketProducts, "basket");
};
