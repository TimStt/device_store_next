import React from "react";
import SubmitRegister from "../submit-register";
import InputPassword from "@/components/input-password";
import InputEmail from "../../../../components/input-email";
import InputUserName from "@/components/input-username";
import style from "./form-register.module.scss";
import { useFormikRegister } from "../../hooks/use-formik-auth";
import { Formik } from "formik";
import { useSubmitRegister } from "../../hooks/use-submit-register";
import validateRegister from "@/shared/libs/validate-auth/validate-register";

const FormRegister = () => {
  const { initialValues, hasError } = useFormikRegister();
  const { onSubmit } = useSubmitRegister();
  return (
    <Formik
      validate={validateRegister}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, errors, touched, getFieldProps }) => (
        <form className={style.root} onSubmit={handleSubmit}>
          <InputUserName
            className={style.root__input_block}
            hasErrorInput={hasError(errors, touched, "username")}
            textError={errors.username}
            {...getFieldProps("username")}
          />

          <InputEmail
            className={style.root__input_block}
            hasErrorInput={hasError(errors, touched, "email")}
            textError={errors.email}
            {...getFieldProps("email")}
          />

          <InputPassword
            className={style.root__input_block}
            hasErrorInput={hasError(errors, touched, "password")}
            textError={errors.password}
            {...getFieldProps("password")}
          />
          <InputPassword
            className={style.root__input_block}
            hasErrorInput={hasError(errors, touched, "cpassword")}
            textError={errors.cpassword}
            placeholder="Повторите секретный пароль"
            {...getFieldProps("cpassword")}
          />

          <SubmitRegister />
        </form>
      )}
    </Formik>
  );
};

export default FormRegister;
