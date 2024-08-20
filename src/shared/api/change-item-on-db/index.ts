import apiInstance from "@/shared/config/apiinstance";
import { TChangeFieldsDevice } from "@/shared/types/products";
import toast from "react-hot-toast";

export const changeItemOnDb = async (
  id: string,
  product: TChangeFieldsDevice
) => {
  try {
    const { data: result } = await apiInstance.put(`/products/${id}`, product);

    toast.success("Продукт изменен успешно");
    return result;
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};
