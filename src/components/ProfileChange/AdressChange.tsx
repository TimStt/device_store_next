import React from "react";
import style from "./_ProfileInfo.module.scss";

function Adress() {
  return (
    <section className={style.root}>
      <div className="container">
        <label htmlFor="city">Город</label>
        <p id="city"></p>
        <label htmlFor="street">Улица</label>
        <p id="street"></p>
      </div>
    </section>
  );
}

export default Adress;
