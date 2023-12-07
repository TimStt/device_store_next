import React from "react";

import Image from "next/image";
import style from "./_card.module.scss";
import { Rating } from "@mui/material";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { DevicesTypes } from "@/types";
import { Plus } from "lucide-react";

const Card: React.FC<DevicesTypes> = ({ title, price, rating, image }) => {
  return (
    <article className={style.root}>
      <Image src={image} alt="sdsds" width={150} height={150} />
      <h2>{title}</h2>
      <Rating name="text-feedback" value={rating.rate} readOnly />
      <div className={style.bottom}>
        <span className={style.price}>{price} $ </span>{" "}
        <button>
          <Plus size={30} color="#D3D3D3" />
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
