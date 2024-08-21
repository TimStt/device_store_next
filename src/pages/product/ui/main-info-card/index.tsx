import { Pen } from "lucide-react";
import Image from "next/image";
import { title } from "process";
import React, { useEffect, useState } from "react";

import AsideActionsProduct from "../aside-actions-product";
import { IDevicesTypes } from "@/shared/types/products";
import { useSession } from "next-auth/react";
import style from "./main-info-card.module.scss";

import { paths } from "@/shared/config/paths";
import Link from "next/link";
import { getBufferBySrc } from "@/shared/utils/get-buffer-by-src";
import { getPlaiceholder } from "plaiceholder";
import { useSelector } from "react-redux";
import { selectorPersonalProducts } from "@/redux/selectors/personal-product";
import Spinner from "@/shared/ui/spinner";

const MainInfoCard = () => {
  const device = useSelector(selectorPersonalProducts);

  const { data: session } = useSession();

  return (
    <>
      {" "}
      {!device ? (
        <Spinner size={20} />
      ) : (
        <>
          <div className={style.root}>
            <Image
              src={device.image.src}
              alt={device.title}
              // layout="responsive"

              width={353}
              height={353}
              placeholder="blur"
              blurDataURL={device.image.placeholder}
            />

            <div className={style.root__info}>
              <h1 className={style.root__title}>{device.title}</h1>
              <p className={style.root__description}>{device.description}</p>

              <span className={style.root__rating}>
                {" "}
                Оценка:
                <span className={style.root__rating__value}>
                  {" "}
                  {device.rating.rate}
                </span>
              </span>

              <span className={style.root__buy}>
                Купили: {device.rating.count} раз
              </span>
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
            <AsideActionsProduct session={session} device={device} />
          </div>
        </>
      )}
    </>
  );
};

export default MainInfoCard;
