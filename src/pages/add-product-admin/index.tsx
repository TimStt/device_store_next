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
import FormAddDevice from "./ui/form-add-device";
import { paths } from "@/shared/config/paths";

// export function generateMetadata(title: string | null) {
//   return {
//     title: title,
//   };
// }

const AddProductAdmin: React.FC = () => {
  return (
    <article className={cls(style.root, "container")}>
      {/* <Head>
        <title>{generateMetadata(isValue.title).title}</title>

       
      </Head> */}

      <div className={style.root__blocks}>
        <FormAddDevice />
      </div>
    </article>
  );
};

export default AddProductAdmin;
