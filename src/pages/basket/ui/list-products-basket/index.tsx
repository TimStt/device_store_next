import React from "react";
import style from "./list-products-basket.module.scss";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { selectBasketProducts } from "@/redux/selectors/basket";
import { useSelector } from "react-redux";
import Counter from "@/shared/ui/counter";
import CardProductBasket from "../card-product-basket";
import TotalSums from "../total-sums";
import EmptyPage from "@/components/empty-page";

const ListProductsBasket = () => {
  const busketProducts = useSelector(selectBasketProducts);

  return (
    <div className={style.root}>
      {busketProducts.map((product, index) => (
        <CardProductBasket key={index} product={product} />
      ))}
    </div>
  );
};

export default ListProductsBasket;
