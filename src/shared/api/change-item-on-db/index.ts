import apiInstance from "@/shared/config/apiinstance";
import { TChangeFieldsDevice } from "@/shared/types/products";
import toast from "react-hot-toast";

export const changeItemOnDb = async (
  id: string,
  product: TChangeFieldsDevice
) => {
  try {
    const { data: result } = await apiInstance.put(`/products/${id}`, product);
    return result;
    toast.success("Продукт изменен успешно");
  } catch (error) {
    console.error((error as Error).message);
    return null;
  }
};
