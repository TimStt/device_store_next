import { IOnDisplayResults } from "@/shared/types/auth";
import toast from "react-hot-toast";

export const onDisplayResultsAuth = ({
  result,
  router,
  textSuccessfullyToast,
}: IOnDisplayResults) => {
  if (result.ok) {
    toast.success(textSuccessfullyToast);
    router.push(result.url as string);
    return;
  }

  toast.error("Ошибка авторизации. Попробуйте еще раз");
};
