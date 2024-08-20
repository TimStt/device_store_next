import { signInWithProviders } from "@/shared/api/sign-in-with-credentials";
import { signInWithCredentials } from "@/shared/api/sign-in-with-providers";
import { IUserLogin, TProviders, TSubmitName } from "@/shared/types/auth";
import { unwrapResult } from "@reduxjs/toolkit";
import { SignInResponse } from "next-auth/react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import { onDisplayResultsAuth } from "@/shared/utils/on-display-result-auth";

export const useSubmitAuth = () => {
  const router = useRouter();

  const [isLoadingCredentials, setLoadingCredentials] = useState(false);
  const [isLoadingProviders, setLoadingProviders] = useState(false);

  const textSuccessfullyToast = "Вы успешно вошли в систему";

  const onSubmit = async (user: IUserLogin) => {
    const resultSignIn = await signInWithCredentials({
      user,
      setLoading: setLoadingCredentials,
    });

    console.log("resultSignIn", resultSignIn);

    if (resultSignIn)
      onDisplayResultsAuth({
        result: {
          ok: resultSignIn.ok,
          error: resultSignIn.error ?? false,
        },
        router,
        textSuccessfullyToast,
      });
  };

  const onSubmitWithProviders = async (provider: TProviders) => {
    const resultSignIn = await signInWithProviders({
      provider,
      setLoading: setLoadingProviders,
    });

    if (resultSignIn)
      onDisplayResultsAuth({
        result: {
          ok: resultSignIn.ok,
          error: resultSignIn.error ?? false,
        },
        router,
        textSuccessfullyToast,
      });
  };

  return {
    isLoadingCredentials,
    isLoadingProviders,
    onSubmit,
    onSubmitWithProviders,
  };
};
