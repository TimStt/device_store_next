import { URL_APP } from "@/shared/config/vars";
import { IAuthActions, ISignInWithCredentials } from "@/shared/types/auth";
import { signIn, signOut } from "next-auth/react";

export const signOutSession = async ({ setLoading }: IAuthActions) => {
  try {
    setLoading(true);
    return await signOut();
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setLoading(false);
  }
};
