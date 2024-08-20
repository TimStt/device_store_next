import { GetServerSideProps } from "next/types";
import React, { FormEvent, useEffect, useState } from "react";
import style from "./card-change.module.scss";
import { useSelector, useDispatch } from "react-redux";

import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Save } from "lucide-react";
import { useRouter } from "next/router";

import InputGroup from "@/components/input-group";
import cls from "classnames";
import FormChangeDevice from "./ui/form-change-device";
import { paths } from "@/shared/config/paths";
import { useGetChangeProduct } from "./hooks/use-get-product";

// export function generateMetadata(title: string | null) {
//   return {
//     title: title,
//   };
// }

const ChangeProductAdmin: React.FC = () => {
  useGetChangeProduct();
  return (
    <article className={cls(style.root, "container")}>
      {/* <Head>
        <title>{generateMetadata(isValue.title).title}</title>

       
      </Head> */}

      <div className={style.root__blocks}>
        <FormChangeDevice />
      </div>
    </article>
  );
};

export default ChangeProductAdmin;
