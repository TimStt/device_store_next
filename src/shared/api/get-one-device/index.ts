import apiInstance from "@/shared/config/apiinstance";
import { IDevicesTypes } from "@/shared/types/products";

export const getOneDevice = async (
  id: string
): Promise<IDevicesTypes | null> => {
  try {
    const { data: device } = await apiInstance.get(`/products/${id}`);

    return device;
  } catch (error) {
    console.log((error as Error).message);

    return null;
  }
};
