import React, { use, useCallback, useMemo } from "react";
import style from "./form-login.module.scss";
import InputPassword from "@/components/input-password";

import InputUserName from "@/components/input-username";

import { useFormikLogin } from "../../hooks/use-formik-login";

import FormActions from "../form-actions";
import { useSelector } from "react-redux";
import { useSubmitAuth } from "../../hooks/use-submit-auth";
import { Formik } from "formik";
import validateLogin from "@/shared/libs/validate-auth/validate-login";

const FormLogin = () => {
  const { initialValues } = useFormikLogin();
  const { onSubmit } = useSubmitAuth();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange={false}
      validate={validateLogin}
    >
      {({ handleSubmit, errors, touched, getFieldProps }) => (
        <form className={style.root} onSubmit={handleSubmit}>
          <InputUserName
            className={style.root__input}
            hasErrorInput={!!errors.username && !!touched.username}
            textError={errors.username}
            {...getFieldProps("username")}
          />
          <InputPassword
            className={style.root__input}
            hasErrorInput={!!errors.password && !!touched.password}
            textError={errors.password}
            {...getFieldProps("password")}
          />
          <FormActions />
        </form>
      )}
    </Formik>
  );
};

export default FormLogin;
