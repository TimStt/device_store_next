import React, { useState } from "react";
import style from "./_add.module.scss";
import { DevicesTypes, RootStateProducts, UserType } from "@/types";
import { useFormik } from "formik";
import validate_product from "@/libs/validateAdmin/validate_product";

import Link from "next/link";
import {
  ArrowLeftCircle,
  Baseline,
  Link2,
  PenLine,
  RussianRuble,
} from "lucide-react";
import ErrorAuth from "@/src/components/ErrorAuth";
import { AppDispatch } from "@/src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { productPostfetch } from "@/src/redux/slice/productChangeSlice";

const AddProduct: React.FC = () => {
  const dispath = useDispatch<AppDispatch>();
  const { products, status } = useSelector(
    (state: RootStateProducts) => state.products
  );

  const generateId = () => {
    if (status === "success") {
      return Math.max(...products.map((product) => +product.id)) + 1;
    }
  };

  const onSubmit = async (value: DevicesTypes) => {
    dispath(productPostfetch({ value }));
  };
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      price: null,
      id: `${generateId()}`,
    },
    validate: validate_product,
    onSubmit,
  });

  const { errors, touched, values } = formik;

  // const [isCountSymbol, setCountSymbol] = useState(
  //   values?.description?.length! + 1
  // );
  const isCountSymbol = values?.description?.length!;

  console.log(isCountSymbol);
  const {
    image: textErrImage,
    title: textErrTitle,
    description: textErrDescription,
    price: textErrPrice,
  } = errors;

  const errorsInput = {
    image: errors.image && touched.image,
    title: errors.title && touched.title,
    description: errors.description && touched.description,
    price: errors.price && touched.price,
  };

  return (
    <div className="container">
      <section className={style.root}>
        <h1>Добавление товара</h1>

        <form className={style.form} onSubmit={formik.handleSubmit}>
          <div className={style.block}>
            <div className={style.input__group}>
              <input
                className={`${style.input} ${
                  errorsInput.image && style.invalid
                } `}
                type="text"
                placeholder="Ссылка на фотографию"
                {...formik.getFieldProps("image")}
              />
              <Link2 size={20} />
            </div>
            {errorsInput.image && <ErrorAuth textError={textErrImage} />}
          </div>

          <div className={style.block}>
            <div className={style.input__group}>
              <input
                className={`${style.input} ${
                  errorsInput.title && style.invalid
                } `}
                type={"text"}
                placeholder="Название"
                {...formik.getFieldProps("title")}
              />
              <Baseline size={20} />
            </div>
            {errorsInput.title && <ErrorAuth textError={textErrTitle} />}
          </div>

          <div className={style.block}>
            <div
              className={`${style.input__group} ${style["input__group--textarea"]}`}
            >
              <span className={style.symbol}>{isCountSymbol}/200</span>
              <textarea
                className={`${style.input} ${
                  errorsInput.description && style.invalid
                } `}
                placeholder="Описание"
                rows={5}
                cols={30}
                maxLength={200}
                {...formik.getFieldProps("description")}
              />

              <PenLine size={20} />
            </div>
            {errorsInput.description && (
              <ErrorAuth textError={textErrDescription} />
            )}
          </div>

          <div className={style.block}>
            <div className={style.input__group}>
              <input
                className={`${style.input} ${
                  errorsInput.price && style.invalid
                } `}
                type={"text"}
                placeholder="Цена"
                {...formik.getFieldProps("price")}
              />
              <RussianRuble size={20} />
            </div>
            {errorsInput.price && <ErrorAuth textError={textErrPrice} />}
          </div>

          <div className={style.bottom}>
            <Link className={style.btn__back} href={`/profile/admin`}>
              Назад
            </Link>
            <button
              className={style.submit}
              // className={`${
              //   (errorsInput.username || errorsInput.password) && style.hide
              // } `}
              type="submit"
              onClick={() => onSubmit(formik.values)}
            >
              Сохранить
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
