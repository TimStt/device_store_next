import React, { useEffect } from "react";
import style from "./_list.module.scss";
import {
  DevicesTypes,
  RootStateProduct,
  UserType,
  stateProductFetchTypes,
} from "@/types";
import { useSelector, useDispatch } from "react-redux";
import { productfetch } from "../../../../src/redux/slice/productInfoSlice";
import Image from "next/image";
import Link from "next/link";
import { AppDispatch } from "@/src/redux/store";
import Loading from "@/pages/loading";
import { Pen, X } from "lucide-react";

const List: React.FC = () => {
  const { products, status } = useSelector(
    (state: RootStateProduct) => state.products
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getAllProducts = async () => {
      dispatch(productfetch({ id: undefined }));
    };

    getAllProducts();
  }, [dispatch]);

  if (status !== "success") {
    return <Loading />;
  }
  return (
    <div className="container">
      <section className={style.root}>
        <h1 className={style.title}>Редактирование товаров</h1>
        {(products as DevicesTypes[]).map((product, index) => (
          <div className={style.product} key={index}>
            <div className={style.id}>
              <span>№ {product.id}</span>
            </div>
            <Link href={`/profile/admin/list/${product.id}`}>
              <div>
                <Image
                  src={product.image}
                  width={50}
                  height={50}
                  alt={product.title!}
                />
              </div>
            </Link>
            <Link href={`/profile/admin/list/${product.id}`}>
              <div className={style.textGroup}>
                <h2 className={style.title}>{product.title}</h2>

                <p className={style.discr}>{product.description}</p>
              </div>
            </Link>

            <div className={style.price}>
              <span>{product.price} ₽</span>
            </div>
            <button
              className={style.pen}
              aria-label="Редактировать"
              title="Редактировать"
            >
              <Link href={`/profile/admin/list/${product.id}`}>
                <Pen />
              </Link>
            </button>
            <button
              className={style.delete}
              aria-label="Удалить"
              title="Удалить"
            >
              <X />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default List;
