import React from "react";
import style from "./counter.module.scss";
import { Minus, Plus } from "lucide-react";
import { useAddProductBasket } from "../../hooks/use-add-product-basket";
import { IDevicesInBasket } from "@/shared/types/products";
import { useDeleteProductBasket } from "@/shared/hooks/use-delete-product-basket";

const Counter = ({ product }: { product: IDevicesInBasket }) => {
  const { handlerAdd } = useAddProductBasket();
  const { handlerDelete } = useDeleteProductBasket();
  return (
    <div className={style.root}>
      <button
        className={style.root__button}
        onClick={() => handlerDelete(product, true)}
        type="button"
        title="Удалить из корзины"
      >
        <Minus />
        <span className={"visually-hidden"}>Удалить из корзины</span>
      </button>
      <b>{product.count}</b>
      <button
        className={style.root__button}
        onClick={() => handlerAdd(product)}
        type="button"
        title="Добавить в корзину"
      >
        <Plus />
        <span className={"visually-hidden"}>Добавить в корзину</span>
      </button>
    </div>
  );
};

export default Counter;
