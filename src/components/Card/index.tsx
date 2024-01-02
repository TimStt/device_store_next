import React from "react";

import Image from "next/image";
import style from "./_card.module.scss";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { DevicesTypes } from "@/types";
import { Plus } from "lucide-react";
import Link from "next/link";
import {
  addItem,
  selectBasket,
  selectProductById,
} from "@/src/redux/slice/basketSlice";

const Card: React.FC<DevicesTypes> = (devices) => {
  const dispatch = useDispatch();
  const { id, title, price, rating, image } = devices || {};
  const { rate } = rating || {};

  const busketProduct = useSelector(selectProductById(id));

  // const busketProduct = useSelector(selectProductById(id));

  return (
    <article className={style.root}>
      <Link href={`/product/${id}`}>
        <Image src={image} alt="sdsds" width={180} height={150} />
      </Link>
      <h2>{title}</h2>
      <Rating name="text-feedback" value={rate} readOnly />
      <div className={style.bottom}>
        <span className={style.price}>{price} ₽ </span>{" "}
        <button
          className={style.addBtn}
          onClick={() => dispatch(addItem(devices))}
        >
          <Plus size={30} color="#D3D3D3" />
          {busketProduct?.count}
        </button>
      </div>
    </article>
  );
};

export default Card;
// type Repo = {
//   name: string;
//   stargazers_count: number;
// };

// export const getServerSideProps = (async (context) => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const repo = await res.json();
//   return { props: { repo } };
// }) satisfies GetServerSideProps<{
//   repo: Repo;
// }>;

// export default function Page({
//   repo,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//   return repo.stargazers_count;
// }
