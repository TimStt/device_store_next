import React from "react";
import style from "./_errorAuth.module.scss";

const ErrorAuth: React.FC<{
  textError: string | undefined;
}> = ({ textError }) => {
  return <span className={style.errors}>{textError}</span>;
};

export default ErrorAuth;
