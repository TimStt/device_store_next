import Link from "next/link";
import React from "react";
import style from "./_404.module.scss";

function NotFound() {
  return (
    <section className={style.root}>
      <div className="container">
        <div className={style.error}>
          <h1>404</h1>
          <span>Что-то пошло не так 😢</span>
          <br />
          <Link href="/">На главную</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
