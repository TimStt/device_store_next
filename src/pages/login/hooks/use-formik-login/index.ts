import validateLogin from "@/shared/libs/validate-auth/validate-login";

import { useFormik } from "formik";

import { useSubmitAuth } from "../use-submit-auth";
import { IUserLogin } from "@/shared/types/auth";

export const useFormikLogin = () => {
  const initialValues: IUserLogin = {
    username: "",
    password: "",
  };

  return {
    initialValues,
  };
};
