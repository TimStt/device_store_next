import { signUpUser } from "@/shared/api/sign-up-user";
import { IUserFormik } from "@/shared/types/auth";
import { onDisplayResultsAuth } from "@/shared/utils/on-display-result-auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFormikRegister } from "../use-formik-auth";
import { paths } from "@/shared/config/paths";

export const useSubmitRegister = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (user: IUserFormik) => {
    console.log("register res");
    const res = await signUpUser({
      user,
      setLoading,
    });

    const hasError = typeof res === "string";
    console.log("hasError", hasError);
    onDisplayResultsAuth({
      result: {
        ok: !!res,
        error: hasError && res,
      },

      textSuccessfullyToast: "Вы успешно зарегистрировались в системе",
    });

    !hasError && router.push(paths.login);
  };

  return {
    onSubmit,
    isLoading,
  };
};
