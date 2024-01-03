import Link from "next/link";
import React, { useEffect, useRef } from "react";
import style from "./_product.module.scss";
import Image from "next/image";
import { DevicesTypes } from "@/types";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { GetServerSideProps, Metadata } from "next/types";
import { Minus, Pen, Plus } from "lucide-react";
import Head from "next/head";
import {
  addCount,
  addItem,
  selectBasket,
  selectProductById,
  subCount,
} from "@/src/redux/slice/basketSlice";
import { useSession } from "next-auth/react";

export function generateMetadata(devices: DevicesTypes) {
  return {
    title: devices.title,
  };
}

const Product: React.FC<{ devices: DevicesTypes }> = ({ devices }) => {
  const { id, title, description, image, price, rating } = devices;
  const { rate, count: countBuy } = rating!;
  const { data: session } = useSession();
  const { busketProduct } = useSelector(selectBasket);
  const product = useSelector(selectProductById(id))!;

  let indexProduct = useRef(0);
  useEffect(() => {
    indexProduct.current = busketProduct.indexOf(product);
  }, [busketProduct, busketProduct.length, product]);

  const dispatch = useDispatch();

  return (
    <article className={style.root}>
      <Head>
        <title>{generateMetadata(devices).title}</title>

        {/* Другие метаданные */}
      </Head>
      <div className="container">
        <div className={style.blocks}>
          <Image
            src={image}
            alt={title as string}
            layout="responsive"
            width={100}
            height={100}
          />
          <div className={style.info}>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className={style.rating}>
              <span>Оценка: </span> <span className={style.value}>{rate}</span>
            </div>
            <span>Купили: {countBuy} раз</span>
            <div className={style.aside}>
              <span className={style.price}>{price} ₽ </span>{" "}
              {session &&
                (product?.count ? (
                  <div className={style.control}>
                    {" "}
                    <button
                      className={style.btn__sub}
                      onClick={() => dispatch(subCount(indexProduct.current))}
                      type="button"
                    >
                      <Minus />
                    </button>
                    <b>{product?.count}</b>
                    <button
                      className={style.btn__add}
                      onClick={() => dispatch(addCount(indexProduct.current))}
                      type="button"
                    >
                      <Plus />
                    </button>
                  </div>
                ) : (
                  <button onClick={() => dispatch(addItem(devices))}>
                    Добавить в корзину
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <Link href="/" className={style.return}>
            Назад
          </Link>
          {session && (
            <Link href={`/profile/admin/list/${id}`} className={style.fix}>
              <span>Редактировать</span>
              <Pen color="#1a1818" size={15} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.params?.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const devices = await res.json();

    return { props: { devices } };
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }
};
export default Product;
