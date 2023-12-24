import React from "react";
import style from "./_loading.module.scss";

function Loading() {
  return (
    <section className={style.root}>
      <div className={style.preloader}>
        <div
          className={`${style.preloader__item} ${style["preloader__one"]}`}
        ></div>
        <div
          className={`${style.preloader__item} ${style["preloader__two"]}`}
        ></div>
        <div
          className={`${style.preloader__item} ${style["preloader__three"]}`}
        ></div>
      </div>
      <span>Загружаем...</span>
    </section>
  );
}

export default Loading;
