import { IOnDisplayResults } from "@/shared/types/auth";
import toast from "react-hot-toast";

export const onDisplayResultsAuth = ({
  result,

  textSuccessfullyToast,
}: IOnDisplayResults) => {
  if (result.ok) {
    toast.success(textSuccessfullyToast);
    return;
  }

  toast.error(result.error as string);
};
