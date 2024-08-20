import React from "react";
import style from "./submit-credentials.module.scss";

import Spinner from "@/shared/ui/spinner";
import { useSubmitAuth } from "../../hooks/use-submit-auth";
import { useFormikLogin } from "../../hooks/use-formik-login";
import { useDispatch, useSelector } from "react-redux";

import { IUserLogin } from "@/shared/types/auth";

const SubmitCredentials = () => {
  const { isLoadingCredentials } = useSubmitAuth();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      className={style.root}
      type="submit"
      disabled={isLoadingCredentials}
    >
      {isLoadingCredentials ? <Spinner size={20} strokeWidth={2} /> : "Войти"}
    </button>
  );
};

export default SubmitCredentials;
