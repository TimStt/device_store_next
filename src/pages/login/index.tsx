import Head from "next/head";
import React, { useState } from "react";

import style from "./login.module.scss";
import LayoutAuth from "@/components/layout-auth";
import FormLogin from "./ui/form-login";
import BottomLogin from "./ui/form-actions";

const Login: React.FC = () => {
  return (
    <LayoutAuth>
      <Head>
        <title>Login</title>
      </Head>
      <section className={style.root}>
        <div className={style.root__title_block}>
          <h1>Вход</h1>
          <p>
            Для удобства использования нашей платформы, войдите в свою учетную
            запись!
          </p>
        </div>
        <FormLogin />
      </section>
    </LayoutAuth>
  );
};

export default Login;
