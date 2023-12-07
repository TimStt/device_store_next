// import Image from "next/image";

import React from "react";
import "@emotion/styled";
import Card from "../src/components/Card";
import { DevicesTypes } from "@/types";
import style from "../src/styles/moduls/_home.module.scss";
import { GetStaticProps } from "next/types";

type deviceType = {
  devices: [DevicesTypes];
};

const Home: React.FC<deviceType> = ({ devices }) => {
  return (
    <div className="container">
      <section className={style.root}>
        <h1>Все товары</h1>
        <div className={style.catalog}>
          {devices.map((device: DevicesTypes, id: number) => (
            <Card key={id} {...device} />
          ))}
        </div>
      </section>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const devices = await res.json();
  console.log(devices);
  return { props: { devices } };
};

export default Home;
