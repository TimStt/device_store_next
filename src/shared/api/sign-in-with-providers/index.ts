import { URL_APP } from "@/shared/config/vars";
import { ISignInWithCredentials } from "@/shared/types/auth";
import { signIn } from "next-auth/react";

export const signInWithCredentials = async ({
  user,
  setLoading,
}: ISignInWithCredentials) => {
  try {
    setLoading(true);
    return await signIn("credentials", {
      redirect: false,
      ...user,
      callbackUrl: process.env.NEXT_PUBLIC_APP_URL,
    });
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setLoading(false);
  }
};
