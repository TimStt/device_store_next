import React from "react";
import style from "./total-sums.module.scss";
import { selectTotalCount, selectTotalPrice } from "@/redux/selectors/basket";
import { useSelector } from "react-redux";

const TotalSums = () => {
  const totalCount = useSelector(selectTotalCount);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div className={style.root}>
      <span className={style.root__total_count}>Товары {totalCount} шт.</span>
      <span className={style.root__total_price}>Итого: {totalPrice} ₽</span>
    </div>
  );
};

export default TotalSums;
