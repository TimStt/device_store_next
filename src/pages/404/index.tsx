import Link from "next/link";
import React from "react";
import style from "./404.module.scss";
import { paths } from "@/shared/config/paths";

const NotFound: React.FC = () => {
  return (
    <section className={style.root}>
      <div className="container">
        <div className={style.root__error}>
          <h1>404</h1>
          <span>Что-то пошло не так 😢</span>
          <br />
          <Link href={paths.home}>На главную</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
