import Link from "next/link";
import React from "react";
import style from "./_product.module.scss";
import Image from "next/image";
import { DevicesTypes } from "@/types";
import { Rating } from "@mui/material";

import { GetServerSideProps, Metadata } from "next/types";
import { Pen } from "lucide-react";
import Head from "next/head";

export function generateMetadata(devices: DevicesTypes) {
  return {
    title: devices.title,
  };
}

const Product: React.FC<{ devices: DevicesTypes }> = ({ devices }) => {
  const { title, description, image, price, rating } = devices || false;
  const { rate, count } = rating || false;

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
            <span>Купили: {count} раз</span>
            <div className={style.aside}>
              <span className={style.price}>{price} ₽ </span>{" "}
              <button>Добавить в корзину</button>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <Link href="/" className={style.return}>
            Назад
          </Link>
          <Link href="/" className={style.fix}>
            <span>Редактировать</span>
            <Pen color="#1a1818" size={15} />
          </Link>
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
