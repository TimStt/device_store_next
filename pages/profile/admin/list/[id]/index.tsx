import { GetServerSideProps } from "next/types";
import React, { FormEvent, useEffect, useState } from "react";
import style from "./_cardChange.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { RootStateProduct } from "@/types";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Save } from "lucide-react";
import { useRouter } from "next/router";
import {
  productfetch,
  productChangefetch,
} from "@/src/redux/slice/productChangeSlice";
import Loading from "@/src/components/Loading";
import SaveWindow from "@/src/components/SaveWindow";

export function generateMetadata(title: string | null) {
  return {
    title: title,
  };
}

const CardChange: React.FC = () => {
  const router = useRouter();
  const { product, getStatus, putStatus } = useSelector(
    (state: RootStateProduct) => state.changeProducts
  );

  const id = String(router.query?.id);
  const dispath = useDispatch<AppDispatch>();
  const [isValue, setValue] = useState({
    ...product[0],
  });

  const [isSave, setSave] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      if (id !== "") {
        dispath(productfetch({ id }));
      }
    };
    getProduct();
  }, [dispath, id]);

  useEffect(() => {
    setValue({ ...isValue, ...product[0] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (getStatus !== "success") {
    return <Loading />;
  }

  const viewWindowSave = () => {
    switch (putStatus) {
      case "success":
        return <SaveWindow typeWindow={putStatus} text="Успешно сохранено!" />;

      case "error":
        return <SaveWindow typeWindow={putStatus} text="Произошла ошибка" />;
    }
  };

  const setValueInput = <T,>(
    event: FormEvent<HTMLInputElement>,
    key: keyof T
  ) => {
    const valueText = (event.target as HTMLInputElement).value;
    setValue({ ...isValue, [key]: valueText });
  };

  return (
    <div className="container">
      {" "}
      <article className={style.root}>
        <Head>
          <title>{generateMetadata(isValue.title).title}</title>

          {/* Другие метаданные */}
        </Head>

        <div className={style.blocks}>
          <div className={style.info}>
            <div className={style.img__block}>
              <Image
                width={300}
                height={300}
                src={isValue.image}
                priority
                // onError={() => {
                //   setErrorUrl(true);
                // }}
                alt={isValue.title}
              />

              <div className={style.img__text}>
                <label htmlFor="imageSrc">Ссылка на изображение</label>
                <input
                  value={isValue.image}
                  type="text"
                  id="imageSrc"
                  onInput={(e) => setValueInput(e, "image")}
                ></input>

                <button></button>
              </div>
            </div>
            <div className={style.info__block}>
              <label htmlFor="title">Название товара</label>
              <input
                value={isValue.title!}
                type="text"
                id="title"
                onInput={(e) => setValueInput(e, "title")}
              ></input>
            </div>
            <div className={style.info__block}>
              <label htmlFor="description">Описание</label>
              <input
                onInput={(e) => setValueInput(e, "description")}
                value={isValue.description!}
                type="text"
                id="description"
              ></input>
            </div>

            <div className={style.info__block}>
              <label htmlFor="price">Цена</label>
              <input
                value={isValue.price!}
                className={style.price}
                onInput={(e) => setValueInput(e, "price")}
                type="text"
                id="price"
              >
                {}
              </input>
            </div>
          </div>
          {isSave && viewWindowSave()}
          <div className={style.bottom}>
            <Link href="/profile/admin/list" className={style.return}>
              Назад
            </Link>
            <button
              onClick={() => {
                dispath(productChangefetch({ isValue }));
                setSave(true);
                setTimeout(() => setSave((isSave) => !isSave), 2000);
              }}
              className={style.fix}
            >
              <span>Изменить</span>
              <Save color="#f6f6f6" size={15} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CardChange;
