import Head from "next/head";
import React, { useState } from "react";
import LayoutAuth from "../../src/components/LayoutAuth";
import style from "./_login.module.scss";

import Link from "next/link";
import { AtSign, Eye, EyeOff } from "lucide-react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import { UserType, inputAuthType } from "@/types";
import validate_login from "@/libs/validateAuth/validate_login";
import ErrorAuth from "@/src/components/ErrorAuth";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [isNotFoundUser, setNotFoundUser] = useState(false);

  const router = useRouter();

  const clickHandlerAuth = async (provider: string) => {
    await signIn(provider, { callbackUrl: "http://localhost:3000" });
  };
  const onSubmit = async (value: UserType) => {
    const status = await signIn("credentials", {
      redirect: false,

      username: value.username,
      password: value.password,

      callbackUrl: "/",
    });
    if (status?.ok) {
      router.push(status.url as string);
    } else {
      setNotFoundUser(!isNotFoundUser);

      setTimeout(
        () => setNotFoundUser((isNotFoundUser) => !isNotFoundUser),
        5000
      );
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validate_login,
    onSubmit,
  });

  const { errors, touched } = formik;
  const { email: textErrEmail, password: textErrPassword } = errors;
  const errorsInput = {
    username: errors.username && touched.username,
    password: errors.password && touched.password,
  };

  return (
    <LayoutAuth>
      <Head>
        <title>Login</title>
      </Head>
      <section className={style.root}>
        <div className={style.title}>
          <h1>Вход</h1>
          <p>
            Для удобства использования нашей платформы, войдите в свою учетную
            запись!
          </p>
        </div>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <div className={style.block}>
            <div className={style.input__group}>
              <input
                className={`${errorsInput.username && style.invalid} `}
                type="text"
                placeholder="Имя пользователя"
                {...formik.getFieldProps("username")}
              />
              <AtSign />
            </div>
            {errorsInput.username && <ErrorAuth textError={textErrEmail} />}
          </div>

          <div className={style.block}>
            <div
              className={`${style.input__group} ${style["input__group--password"]} `}
            >
              <input
                className={`${errorsInput.password && style.invalid} `}
                type={showPassword ? "password" : "text"}
                placeholder="Секретный пароль"
                pattern=".{6,}"
                {...formik.getFieldProps("password")}
              />
              {showPassword ? (
                <Eye
                  className={style.eye}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <EyeOff
                  className={style.eye}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {errorsInput.password && <ErrorAuth textError={textErrPassword} />}
          </div>
          <div className={style.bottom}>
            <div className={style.group__btns}>
              <div className={style.submit}>
                {isNotFoundUser && (
                  <ErrorAuth textError="Извините, но такого пользователя не существует 😔" />
                )}
                <button
                  className={`${
                    (errorsInput.username || errorsInput.password) && style.hide
                  } `}
                  type="submit"
                  onClick={() => onSubmit(formik.values)}
                >
                  Войти
                </button>
              </div>
              <div className={style.google}>
                <button
                  className={style.button}
                  type="submit"
                  onClick={() => clickHandlerAuth("google")}
                >
                  Войти с помощью Google
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <title>Google</title>
                    <path
                      fill="#4285F4"
                      d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
                    />
                    <path
                      fill="#34A853"
                      d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
                    />
                    <path
                      fill="#FBBC04"
                      d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
                    />
                    <path
                      fill="#EA4335"
                      d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
                    />
                  </svg>
                </button>
              </div>
              <div className={style.gitHub}>
                <button
                  className={style.button}
                  type="submit"
                  onClick={() => clickHandlerAuth("github")}
                >
                  Войти с помощью GitHub
                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 -0.5 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Github</title>

                    <defs></defs>
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-700.000000, -560.000000)"
                        fill="white"
                      >
                        <path
                          d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"
                          id="Github"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <p className={style.notRegister}>
              Еще нету аккаунта? <Link href="/register"> Регистрация</Link>
            </p>
          </div>
        </form>
      </section>
    </LayoutAuth>
  );
};

export default Login;
