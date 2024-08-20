import React, { memo } from "react";
import style from "./submit-register.module.scss";
import { useSubmitRegister } from "../../hooks/use-submit-register";
import { useFormikRegister } from "../../hooks/use-formik-auth";
import Spinner from "@/shared/ui/spinner";

const SubmitRegister = () => {
  const { isLoading } = useSubmitRegister();
  return (
    <button className={style.root} type="submit">
      {isLoading ? <Spinner size={10} strokeWidth={2} /> : "Зарегистрироваться"}
    </button>
  );
};

export default SubmitRegister;
