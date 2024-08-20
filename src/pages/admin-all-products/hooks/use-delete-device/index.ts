import { selectorDeleteLoading } from "@/redux/selectors/actions-devices";
import { productDeleteThunk } from "@/redux/slices/product-actions-slice";
import App from "next/app";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export const useDeleteDevice = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const isLoadingDelete = useSelector(selectorDeleteLoading);
  const handlerDelete = async (id: string) => {
    await dispatch(productDeleteThunk(id));
    router.refresh();
  };

  return {
    isLoadingDelete,
    handlerDelete,
  };
};
