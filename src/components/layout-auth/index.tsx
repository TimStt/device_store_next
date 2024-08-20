import Head from "next/head";
import React from "react";
import style from "./layout-auth.module.scss";
import Image from "next/image";
import cls from "classnames";
import { ILayoutAuth } from "@/shared/types/ui";

const LayoutAuth: React.FC<ILayoutAuth> = ({ children, title }) => {
  return (
    <div className={style.background}>
      <Head>
        <title>{title || "Авторизация"}</title>
      </Head>
      <article className={cls(style.window, "container")}>
        <div className={style.img}>
          <Image
            src="/shopAuth.png"
            alt="девушка с сумками продуктов"
            width="200"
            height="200"
            objectFit="contain"
          />
        </div>
        <div className={style.auth}>{children}</div>
      </article>
    </div>
  );
};

export default LayoutAuth;
