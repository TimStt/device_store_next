import { selectBasketProducts } from "@/redux/selectors/basket";
import { IDevicesInBasket } from "@/shared/types/products";
import { updateBasketState } from "@/shared/utils/update-basket-state";
import { useDispatch, useSelector } from "react-redux";

export const useDeleteProductBasket = () => {
  const basketProducts = useSelector(selectBasketProducts);
  let copyBasketProducts = [...basketProducts];
  const dispatch = useDispatch<AppDispatch>();

  const handlerDelete = (
    choosenProduct: IDevicesInBasket,
    isSubCount = false
  ) => {
    let {
      id: idChoosen,
      count: countChoosen,
      totalPrice: totalPriceChoosen,
    } = choosenProduct;

    if (isSubCount && countChoosen > 1) {
      copyBasketProducts = copyBasketProducts.map((product) =>
        product.id === idChoosen
          ? {
              ...product,
              count: --countChoosen,
              totalPrice: totalPriceChoosen - choosenProduct.price,
            }
          : product
      );
    } else {
      const index = copyBasketProducts.findIndex(
        ({ id }) => id === choosenProduct.id
      );
      copyBasketProducts.splice(index, 1);
    }

    updateBasketState(copyBasketProducts, dispatch);
  };

  return {
    handlerDelete,
  };
};
