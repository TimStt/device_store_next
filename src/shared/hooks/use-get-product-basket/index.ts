import {
  setProductsBasket,
  setTotalCount,
  setTotalPrice,
} from "@/redux/slices/basket-slice";
import { IDevicesInBasket, IDevicesTypes } from "@/shared/types/products";
import { getItemByLS } from "@/shared/utils/get-item-by-LS";
import { sumirizeNumberInArr } from "@/shared/utils/sumirize-number-in-arr";
import { Action } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useGetProductsBasket = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const products = getItemByLS<IDevicesInBasket[]>("basket");
    if (!products) return;
    dispatch(setProductsBasket(products ?? []));
    dispatch(setTotalCount(sumirizeNumberInArr(products, "count")));
    dispatch(setTotalPrice(sumirizeNumberInArr(products, "totalPrice")));
  }, [dispatch]);
};
