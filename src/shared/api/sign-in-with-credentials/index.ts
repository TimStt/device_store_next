import { URL_APP } from "@/shared/config/vars";
import { ISignInWithProviders } from "@/shared/types/auth";
import { signIn, SignInResponse } from "next-auth/react";

export const signInWithProviders = async ({
  provider,
  setLoading,
}: ISignInWithProviders): Promise<SignInResponse | undefined> => {
  try {
    setLoading(true);
    return await signIn(provider, { callbackUrl: "http://localhost:3000" });
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setLoading(false);
  }
};
