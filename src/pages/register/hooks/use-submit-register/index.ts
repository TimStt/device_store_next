import { signUpUser } from "@/shared/api/sign-up-user";
import { IUserFormik } from "@/shared/types/auth";
import { onDisplayResultsAuth } from "@/shared/utils/on-display-result-auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useFormikRegister } from "../use-formik-auth";

export const useSubmitRegister = () => {
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (user: IUserFormik) => {
    console.log("register res");
    const res = await signUpUser({
      user,
      setLoading,
    });

    onDisplayResultsAuth({
      result: {
        ok: !!res,
        error: typeof res === "string" && res,
        url: "/login",
      },
      router,
      textSuccessfullyToast: "Вы успешно зарегистрировались в системе",
    });
  };

  return {
    onSubmit,
    isLoading,
  };
};
