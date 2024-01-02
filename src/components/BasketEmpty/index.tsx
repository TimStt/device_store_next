import React from "react";

import Image from "next/image";
import style from "./basketEmpty.module.scss";

import Link from "next/link";

const Card: React.FC = () => {
  return (
    <div className="container">
      <section className={style.root}>
        <div className={style.blocks}>
          <div className={style.block}>
            <Image
              src="/basketEmpty.jpg"
              alt="Пустая корзина"
              width={400}
              height={400}
            />
          </div>
          <div className={style.block}>
            <p>К сожалению корзина пуста 😕</p>
          </div>
          <div className={style.block}>
            <Link className={style.btnBack} href={`/`}>
              Вернуться назад
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
