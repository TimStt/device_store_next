import { Link, Pen } from "lucide-react";
import Image from "next/image";
import { title } from "process";
import React from "react";

import AsideActionsProduct from "../aside-actions-product";
import { IDevicesTypes } from "@/shared/types/products";
import { useSession } from "next-auth/react";
import style from "./main-info-card.module.scss";
import { IMainInfoCardProps, IPropsDevice } from "@/shared/types/ui";
import { paths } from "@/shared/config/paths";

const MainInfoCard = ({ device }: IMainInfoCardProps) => {
  const { rate } = device.rating;
  const { data: session } = useSession();
  return (
    <>
      <div className={style.root}>
        <Image
          src={device.image}
          alt={device.title}
          layout="responsive"
          width={100}
          height={100}
        />
        <div className={style.root__info}>
          <h1>{device.title}</h1>
          <p>{device.description}</p>

          <div className={style.root__rating}>
            <span>Оценка: </span>{" "}
            <span className={style.root__rating__value}>{rate}</span>
          </div>
          <span>Купили: {device.countBuy} раз</span>
        </div>
      </div>
      <div className={style.root__bottom}>
        <Link href="/" className={style.return}>
          Назад
        </Link>
        {session && (
          <Link
            href={paths.adminChangeId(device.id)}
            className={style.root__fix}
          >
            <span>Редактировать</span>
            <Pen color="#1a1818" size={15} />
          </Link>
        )}
        <AsideActionsProduct device={device} session={session} />
      </div>
    </>
  );
};

export default MainInfoCard;
