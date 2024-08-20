import React from "react";
import style from "./basket.module.scss";

import cls from "classnames";
import Counter from "../../shared/ui/counter";
import ListProductsBasket from "./ui/list-products-basket";
import TotalSums from "./ui/total-sums";
import CleanButton from "./ui/clean-button";
import { useSelector } from "react-redux";
import { selectBasketProducts } from "@/redux/selectors/basket";
import EmptyPage from "@/components/empty-page";

function Basket() {
  const busketProducts = useSelector(selectBasketProducts);

  if (!busketProducts.length)
    return (
      <EmptyPage title="Корзина пуста" backLink="home" image="/empty.jpg" />
    );
  return (
    <section className={cls(style.root, "container")}>
      <div className={style.basket__top}>
        <CleanButton />
      </div>

      <ListProductsBasket />
      <TotalSums />
    </section>
  );
}

export default Basket;
