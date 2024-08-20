import { paths } from "@/shared/config/paths";
import signup from "@/shared/libs/sign-up-user";
import validateRegister from "@/shared/libs/validate-auth/validate-register";
import { IUser, IUserAuth, IUserFormik } from "@/shared/types/auth";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSubmitRegister } from "../use-submit-register";

export const useFormikRegister = () => {
  const initialValues = {
    email: "",
    password: "",
    cpassword: "",
    username: "",
  };

  const hasError = (
    errors: FormikErrors<IUserFormik>,
    touched: FormikTouched<IUserFormik>,
    name: keyof IUserFormik
  ) => {
    return !!errors[name] && !!touched[name];
  };

  return {
    initialValues,
    hasError,
  };
};
