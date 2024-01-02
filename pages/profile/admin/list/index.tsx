import React, { useEffect, useState } from "react";
import style from "./_list.module.scss";
import {
  DevicesTypes,
  RootStateProducts,
  UserType,
  stateProductsFetchTypes,
} from "@/types";
import { productDeletefetch } from "@/src/redux/slice/productChangeSlice";
import { useSelector, useDispatch } from "react-redux";
import { productsfetch } from "../../../../src/redux/slice/productInfoSlice";
import Image from "next/image";
import Link from "next/link";
import { AppDispatch } from "@/src/redux/store";
import Loading from "@/pages/loading";
import { ArrowLeftCircle, Pen, X } from "lucide-react";
import { Pagination } from "@mui/material";

const List: React.FC = () => {
  const { products, status } = useSelector(
    (state: RootStateProducts) => state.products
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    getAllProducts();
  }, [dispatch]);

  const getAllProducts = async () => {
    dispatch(productsfetch());
  };
  if (status !== "success") {
    return <Loading />;
  }

  return (
    <div className="container">
      <section className={style.root}>
        <div className={style.top}>
          <h1 className={style.title}>Редактирование товаров</h1>
          <Link className={style.btn__back} href={`/profile/admin`}>
            <ArrowLeftCircle size={20} />
          </Link>
        </div>

        {products.map(({ image, id, description, title, price }, index) => (
          <div className={style.product} key={index}>
            <div className={style.id}>
              <span>№ {index + 1}</span>
            </div>
            <Link href={`/profile/admin/list/${id}`}>
              <div>
                <Image src={image} width={50} height={50} alt={title!} />
              </div>
            </Link>
            <Link href={`/profile/admin/list/${id}`}>
              <div className={style.textGroup}>
                <h2 className={style.title}>{title}</h2>

                <p className={style.discr}>{description}</p>
              </div>
            </Link>

            <div className={style.price}>
              <span>{price} ₽</span>
            </div>
            <button
              className={style.pen}
              aria-label="Редактировать"
              title="Редактировать"
            >
              <Link href={`/profile/admin/list/${id}`}>
                <Pen />
              </Link>
            </button>
            <button
              onClick={async () => {
                await dispatch(productDeletefetch({ id }));
                await getAllProducts();
              }}
              className={style.delete}
              aria-label="Удалить"
              title="Удалить"
            >
              <X />
            </button>
          </div>
        ))}

        <Pagination className={style.pagination} count={10} size="large" />
      </section>
    </div>
  );
};

export default List;
