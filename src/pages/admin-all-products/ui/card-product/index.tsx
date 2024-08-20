import { Pen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { paths } from "@/shared/config/paths";
import { X } from "lucide-react";
import Spinner from "@/shared/ui/spinner";
import { useDeleteDevice } from "../../hooks/use-delete-device";
import style from "./card-product-admin.module.scss";
import { ICardProductAdmin } from "@/shared/types/ui";
import { useSearchParams } from "next/navigation";

const CardProductAdmin = ({ device, indexDevice }: ICardProductAdmin) => {
  const { isLoadingDelete, handlerDelete } = useDeleteDevice();

  const searchParams = useSearchParams();

  const page = new URLSearchParams(searchParams?.toString()).get("page");
  const pathsChange = paths.adminChangeId(device.id, page as string);
  return (
    <article className={style.root}>
      <span className={style.id}>№ {indexDevice}</span>

      <Link className={style.root__image} href={pathsChange}>
        <Image src={device.image} width={50} height={50} alt={device.title} />
      </Link>
      <Link href={pathsChange}>
        <div className={style.root__textGroup}>
          <h2 className={style.root__title}>{device.title}</h2>

          <p className={style.root__discr}>{device.description}</p>
        </div>
      </Link>

      <div className={style.root__price}>
        <span>{device.price} ₽</span>
      </div>

      <Link className={style.pen} href={pathsChange}>
        <Pen />
        <span className="visually-hidden">Редактировать товар</span>
      </Link>

      <button
        className={style.root__delete}
        onClick={() => handlerDelete(device.id)}
        disabled={isLoadingDelete}
        aria-label="Удалить товар"
        title="Удалить товар"
      >
        {isLoadingDelete ? (
          <Spinner className={style.root__spinner} size={10} strokeWidth={2} />
        ) : (
          <X />
        )}
        <span className="visually-hidden">Удалить товар</span>
      </button>
    </article>
  );
};

export default CardProductAdmin;
