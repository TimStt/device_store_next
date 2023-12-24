import { GetServerSideProps } from "next/types";
import React, { FormEvent, useEffect, useState } from "react";
import style from "./_cardChange.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { DevicesTypes, RootStateProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import NotFound from "@/pages/404";
import { Save } from "lucide-react";
import { useRouter } from "next/router";
import { productfetch } from "@/src/redux/slice/productInfoSlice";
export function generateMetadata(title: string | null) {
  return {
    title: title,
  };
}
const CardChange: React.FC = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  const dispath = useDispatch<AppDispatch>();
  useEffect(() => {
    const getAllProducts = async () => {
      dispath(productfetch({ id: id }));
    };

    getAllProducts();
  }, [dispath, id]);
  const { products } = useSelector((state: RootStateProduct) => state.products);

  const { title, description, image, price } = products as DevicesTypes;
  const [isValue, setValue] = useState<DevicesTypes>({
    id: id,
    title: title,
    price: price,
    image: image,

    description: description,
  });

  if (!products) {
    return <NotFound />;
  }

  //ts ignore

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
          <title>{generateMetadata(title).title}</title>

          {/* Другие метаданные */}
        </Head>

        <div className={style.blocks}>
          <div className={style.img__block}>
            <Image src={image} alt={title as string} width={300} height={300} />
            <div className={style.img__text}>
              <label htmlFor="imageSrc">Ссылка на изображение</label>
              <input
                value={isValue.image}
                type="text"
                id="imageSrc"
                onInput={(e) => setValueInput(e, "image")}
              ></input>
            </div>
          </div>
          <div className={style.info}>
            <div>
              <label htmlFor="title">Название товара</label>
              <input
                value={isValue.title || "Пусто"}
                type="text"
                id="title"
                onInput={(e) => setValueInput(e, "title")}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Описание</label>
              <input
                onInput={(e) => setValueInput(e, "description")}
                value={isValue.description || "Пусто"}
                type="text"
                id="description"
              ></input>
            </div>

            <div>
              <label htmlFor="price">Цена</label>
              <input
                value={`${isValue.price} ₽` || "Пусто"}
                className={style.price}
                onInput={(e) => setValueInput(e, "price")}
                type="text"
                id="price"
              >
                {}
              </input>
            </div>
          </div>
        </div>
        <div className={style.bottom}>
          <Link href="/profile/admin/list" className={style.return}>
            Назад
          </Link>
          <button className={style.fix}>
            <span>Сохранить</span>
            <Save color="#1a1818" size={15} />
          </button>
        </div>
      </article>
    </div>
  );
};

export default CardChange;
