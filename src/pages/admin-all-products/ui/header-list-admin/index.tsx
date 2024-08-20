import { ArrowLeftCircle } from "lucide-react";
import React from "react";
import { paths } from "@/shared/config/paths";
import style from "./header-list-admin.module.scss";
import Link from "next/link";

const HeaderListAdmin = () => {
  return (
    <div className={style.root}>
      <h1 className={style.root__title}>Редактирование товаров</h1>
      <Link className={style.root__btn_back} href={paths.admin}>
        <ArrowLeftCircle size={20} />
        {/* <span className="visually-hidden"> Вернуться назад</span> */}
      </Link>
    </div>
  );
};

export default HeaderListAdmin;
