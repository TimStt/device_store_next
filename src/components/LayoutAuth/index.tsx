import Head from "next/head";
import React from "react";
import style from "./_layoutAuth.module.scss";
import Image from "next/image";

const LayoutAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={style.background}>
      <div className="container">
        <article className={style.window}>
          <div className={style.img}>
            <Image
              src="/shopAuth.png"
              alt="sdsds"
              width="200"
              height="200"
              objectFit="contain"
            />
          </div>
          <div className={style.auth}>{children}</div>
        </article>
      </div>
    </div>
  );
};

export default LayoutAuth;
