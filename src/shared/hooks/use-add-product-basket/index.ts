import { selectBasketProducts } from "@/redux/selectors/basket";
import {
  setProductsBasket,
  setTotalCount,
  setTotalPrice,
} from "@/redux/slices/basket-slice";
import { IDevicesInBasket, IDevicesTypes } from "@/shared/types/products";

import { sumirizeNumberInArr } from "@/shared/utils/sumirize-number-in-arr";
import { updateBasketState } from "@/shared/utils/update-basket-state";
import { useDispatch, useSelector } from "react-redux";

export const useAddProductBasket = () => {
  const basketProducts = useSelector(selectBasketProducts);
  let copyBasketProducts = JSON.parse(
    JSON.stringify(basketProducts)
  ) as IDevicesInBasket[];
  const dispatch = useDispatch<AppDispatch>();
  const handlerAdd = (addProduct: IDevicesTypes) => {
    const existing = copyBasketProducts.find(({ id }) => id === addProduct.id);

    if (!Array.isArray(copyBasketProducts)) copyBasketProducts = [];

    if (existing) {
      console.log("повторное добавление", existing);
      existing.count += 1;
      existing.totalPrice += addProduct.price;
    } else {
      console.log(" добавление", addProduct);
      copyBasketProducts.push({
        ...addProduct,
        count: 1,
        totalPrice: addProduct.price,
      });
      console.log(" добавление", existing);
    }

    updateBasketState(copyBasketProducts, dispatch);
  };

  return {
    handlerAdd,
  };
};
