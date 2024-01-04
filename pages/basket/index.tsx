import React from "react";
import style from "./_basket.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  cleanBusket,
  delItem,
  selectBasket,
  subCount,
} from "@/src/redux/slice/basketSlice";
import BasketEmpty from "@/src/components/BasketEmpty";

function Basket() {
  const dispatch = useDispatch();
  const { busketProduct, totalPrice, totalCount } = useSelector(selectBasket);

  if (!totalPrice) return <BasketEmpty />;
  return (
    <div className="container">
      <section className={style.root}>
        <div className={style.basket__top}>
          <button
            className={style.cleanBusket}
            onClick={() => dispatch(cleanBusket())}
          >
            Очистить корзину <X size={16} color="gray" />
          </button>
        </div>
        <div className={style.list__items}>
          {busketProduct.map(
            ({ image, price, description, title, id, count }, index) => (
              <div className={style.product} key={image}>
                <Link className={style.image} href={`/product/${id}`}>
                  <Image src={image} width={90} height={90} alt={title!} />
                </Link>
                <Link href={`/product/${id}`}>
                  <div className={style.text__group}>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.discr}>{description}</p>
                  </div>
                </Link>
                <div className={style.price}>
                  <span>{price} ₽</span>
                </div>
                <div className={style.btns}>
                  <div className={style.counter}>
                    <button
                      className={style.btn__sub}
                      onClick={() => dispatch(subCount(index))}
                      type="button"
                    >
                      <Minus />
                    </button>
                    <b>{count}</b>
                    <button
                      className={style.btn__add}
                      onClick={() => dispatch(addCount(index))}
                      type="button"
                    >
                      <Plus />
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(delItem(index))}
                    className={style.delete}
                    aria-label="Удалить"
                    title="Удалить"
                  >
                    <X />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        <div className={style.bottom}>
          <span className={style.totalCount}>Товары {totalCount} шт.</span>
          <span className={style.totalPrice}>Итого {totalPrice} ₽</span>
        </div>
      </section>
    </div>
  );
}

export default Basket;
