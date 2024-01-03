// import Image from "next/image";

import React, { Suspense, useEffect } from "react";
import "@emotion/styled";
import Card from "../src/components/Card";
import { DevicesTypes } from "@/types";
import style from "../src/styles/moduls/_home.module.scss";
import { GetServerSideProps, GetStaticProps } from "next/types";
import { getSession } from "next-auth/react";
import Loading from "../src/components/Loading";

type deviceType = {
  devices: [DevicesTypes];
};

const Home: React.FC<deviceType> = ({ devices }) => {
  return (
    <Suspense fallback={<Loading />}>
      <section className={style.root}>
        <div className="container">
          <h1>Все товары</h1>
          <div className={style.catalog}>
            {devices.map((device: DevicesTypes, id: number) => (
              <Card key={id} {...device} />
            ))}
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(
      "https://6555201463cafc694fe778bf.mockapi.io/devices",
      {
        next: {
          revalidate: 60,
        },
      }
    );
    const devices = await res.json();
    console.log(devices);
    return { props: { devices } };
  } catch (error) {
    return { props: {}, isLoading: true };
  }
};

export default Home;
