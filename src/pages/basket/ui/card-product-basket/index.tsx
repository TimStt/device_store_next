import { IDevicesInBasket } from "@/shared/types/products";
import React, { memo } from "react";
import style from "./card-product-basket.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Trash, X } from "lucide-react";

import { paths } from "@/shared/config/paths";
import Counter from "@/shared/ui/counter";
import { useDeleteProductBasket } from "@/shared/hooks/use-delete-product-basket";

const CardProductBasket = ({ product }: { product: IDevicesInBasket }) => {
  const { handlerDelete } = useDeleteProductBasket();

  return (
    <article className={style.root} key={product.image}>
      <Link
        className={style.root__block}
        href={paths.productPersonPage(product.id)}
      >
        <Image src={product.image} width={90} height={90} alt={product.title} />
        <div className={style.root__text_group}>
          <h2 className={style.root__title}>{product.title}</h2>
          <p className={style.root__discr}>{product.description}</p>
        </div>
      </Link>
      <div className={style.root__prices}>
        <span>{product.price} ₽ одна шт.</span>
        <span>
          {product.totalPrice} ₽ за {product.count} шт.
        </span>
      </div>
      <div className={style.root__actions}>
        <Counter product={product} />
        <button
          className={style.root__delete}
          onClick={() => handlerDelete(product)}
          aria-label="Удалить"
          title="Удалить товар из корзины"
        >
          <Trash />
          <span className={"visually-hidden"}>Удалить</span>
        </button>
      </div>
    </article>
  );
};

CardProductBasket.displayName = "CardProductBasket";

export default CardProductBasket;
