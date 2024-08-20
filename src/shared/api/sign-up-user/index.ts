import { URL_APP } from "@/shared/config/vars";
import signup from "@/shared/libs/sign-up-user";
import { ISignUp } from "@/shared/types/auth";

export const signUpUser = async ({ user, setLoading }: ISignUp) => {
  try {
    setLoading(true);
    return await signup(user);
  } catch (error) {
    console.log((error as Error).message);
  } finally {
    setLoading(false);
  }
};
