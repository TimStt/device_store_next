import React from "react";

import Image from "next/image";
import style from "./card.module.scss";
import { Rating } from "@mui/material";

import Link from "next/link";
import AddBasketButton from "./ui/add-basket-button";
import { IPropsDevice } from "@/shared/types/ui";
import { paths } from "@/shared/config/paths";

const Card: React.FC<IPropsDevice> = ({ device }) => {
  const { rate } = device?.rating || {};
  return (
    <article className={style.root}>
      <Link href={paths.productPersonPage(device?.id)}>
        <Image src={device?.image} alt="sdsds" width={180} height={150} />
      </Link>
      <h2>{device?.title}</h2>
      <Rating name="text-feedback" value={rate} readOnly />
      <div className={style.root__bottom}>
        <span className={style.root__price}>{device?.price} ₽ </span>{" "}
        <AddBasketButton device={device} />
      </div>
    </article>
  );
};

export default Card;
