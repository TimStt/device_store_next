import { IDevicesTypes } from "@/shared/types/products";
import React from "react";

import style from "./home.module.scss";
import Card from "@/components/card";
import ProductList from "./ui/product-list";
import cls from "classnames";

const Home: React.FC = () => {
  return (
    <section className={cls(style.root, "container")}>
      <h1>Все товары</h1>
      <ProductList />
    </section>
  );
};

export default Home;
