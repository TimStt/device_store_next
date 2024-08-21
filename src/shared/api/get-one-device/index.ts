import apiInstance from "@/shared/config/apiinstance";
import { IDevicesTypes } from "@/shared/types/products";

export const getOneDevice = async (id: string) => {
  try {
    const { data: device } = await apiInstance.get<IDevicesTypes | null>(
      `/products/${id}`
    );

    return Object(device) ? device : null;
  } catch (error) {
    console.log((error as Error).message);
  }
};
