import React from "react";

import style from "./form-actions.module.scss";
import Link from "next/link";
import SubmitCredentials from "../submit-credentials";
import ProvidersSubmit from "../providers-submit";

const FormActions = () => {
  return (
    <div className={style.root}>
      <div className={style.root__group_btns}>
        <SubmitCredentials />
        <ProvidersSubmit provider="google" />
        <ProvidersSubmit provider="github" />
      </div>
      <p className={style.notRegister}>
        Еще нету аккаунта? <Link href="/register"> Регистрация</Link>
      </p>
    </div>
  );
};

export default FormActions;
