import Head from "next/head";
import React, { useState } from "react";

import style from "./register.module.scss";
import { AtSign, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { IUser, IUserFormik } from "@/shared/types/auth";

import validateRegister from "../../shared/libs/validate-auth/validate-register";
import InputGroup from "@/components/input-group";
import ErrorAuth from "@/components/error-auth";
import cls from "classnames";
import LayoutAuth from "@/components/layout-auth";
import InputUserName from "../../components/input-username";
import InputPassword from "../../components/input-password";
import InputEmail from "../../components/input-email";
import signup from "@/shared/libs/sign-up-user";
import { useFormikRegister } from "./hooks/use-formik-auth";
import SubmitRegister from "./ui/submit-register";
import FormRegister from "./ui/form-register";

const Register: React.FC = () => {
  const title = "Регистрация";

  return (
    <LayoutAuth title={title}>
      <section className={style.root}>
        <div className={style.root__title}>
          <h1>{title}</h1>
          <p>Для удобства использования нашей платформы, зарегистрируйтесь!</p>
        </div>
        <FormRegister />
        <span className={style.root__not_register}>
          Уже есть аккаунт? <Link href="/login"> Войти</Link>
        </span>
      </section>
    </LayoutAuth>
  );
};

export default Register;
