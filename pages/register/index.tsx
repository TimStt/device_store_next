import Head from "next/head";
import React, { useState } from "react";
import LayoutAuth from "../../src/components/LayoutAuth";
import style from "./_register.module.scss";
import { AtSign, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { useFormik } from "formik";
import { UserType } from "@/types";
import ErrorAuth from "@/src/components/ErrorAuth";

import validate_register from "@/libs/validateAuth/validate_register";
import signup from "../../libs/signUpUser";
import { useRouter } from "next/router";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState({
    password: true,
    cpassword: true,
  });

  //
  const showEye = <T,>(obj: T, key: keyof T) => {
    return obj[key] ? (
      <Eye
        className={style.eye}
        onClick={() => setShowPassword({ ...showPassword, [key]: !obj[key] })}
      />
    ) : (
      <EyeOff
        className={style.eye}
        onClick={() => setShowPassword({ ...showPassword, [key]: !obj[key] })}
      />
    );
  };

  const router = useRouter();

  const onSubmit = async (value: UserType) => {
    try {
      const res = await signup(value);

      if (typeof res === "string") {
        console.log("Ошибка" + res);
      } else {
        console.log(res);
        router.push("http://localhost:3000/login");
      }
    } catch (error) {
      console.log("Возникла не предвиденная оишбка" + error);
    }
    console.log("click ");
  };
  const formik = useFormik({
    initialValues: { email: "", password: "", cpassword: "", username: "" },
    validate: validate_register,
    onSubmit,
  });
  const { errors, touched } = formik;

  const {
    email: textErrEmail,
    password: textErrPassword,
    cpassword: textErrCpassword,
    username: textErrUserName,
  } = errors;

  const errorsInput = {
    email: errors.email && touched.email,
    password: errors.password && touched.password,
    cpassword: errors.cpassword && touched.cpassword,
    username: errors.username && touched.username,
  };

  return (
    <LayoutAuth>
      <Head>
        <title>Регистрация</title>
      </Head>
      <section className={style.root}>
        <div className={style.title}>
          <h1>Регистрация</h1>
          <p>Для удобства использования нашей платформы, зарегистрируйтесь!</p>
        </div>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <div className={style.block}>
            <div className={style.input__group}>
              <input
                className={`${errorsInput.username && style.invalid}  `}
                type="text"
                {...formik.getFieldProps("username")}
                placeholder="Введите свое имя"
              />
              <User className={style.nickName} size={24} />
            </div>
            {errorsInput.username && <ErrorAuth textError={textErrUserName} />}
          </div>
          <div className={style.block}>
            <div className={style.input__group}>
              <input
                className={`${errorsInput.email && style.invalid}  `}
                type="email"
                placeholder="Ваша почта"
                {...formik.getFieldProps("email")}
              />
              <AtSign className={style.atSign} size={24} />
            </div>
            {errorsInput.email && <ErrorAuth textError={textErrEmail} />}
          </div>
          <div className={style.block}>
            <div
              className={`${style.input__group} ${style["input__group--password"]} `}
            >
              <input
                className={`${errorsInput.password && style.invalid}  `}
                type={showPassword.password ? "password" : "text"}
                placeholder="Секретный пароль"
                pattern=".{6,}"
                {...formik.getFieldProps("password")}
              />
              {showEye(showPassword, "password")}
              <span className={style.smile}></span>
            </div>
            {errorsInput.password && <ErrorAuth textError={textErrPassword} />}
          </div>
          <div className={style.block}>
            <div
              className={`${style.input__group} ${style["input__group--password"]} `}
            >
              <input
                className={`${errorsInput.cpassword && style.invalid}  `}
                type={showPassword.cpassword ? "password" : "text"}
                placeholder="Повторите секретный пароль"
                pattern=".{6,}"
                {...formik.getFieldProps("cpassword")}
              />
              {showEye(showPassword, "cpassword")}
              <span className={style.smile}></span>
            </div>
            {errorsInput.cpassword && (
              <ErrorAuth textError={textErrCpassword} />
            )}
          </div>

          <button
            className={style.submit}
            onClick={() => onSubmit(formik.values)}
            type="submit"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className={style.notRegister}>
          Уже есть аккаунт? <Link href="/login"> Войти</Link>
        </p>
      </section>
    </LayoutAuth>
  );
};

export default Register;
