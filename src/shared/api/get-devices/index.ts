import apiInstance from "@/shared/config/apiinstance";
import { API_URL } from "@/shared/config/vars";
import { IDevicesTypes } from "@/shared/types/products";
import axios from "axios";

export const getDevices = async () => {
  try {
    const { data: devices } = await apiInstance.get<IDevicesTypes[]>(
      `/products`
    );

    return devices;
  } catch (error) {
    console.log((error as Error).message);
    return [];
  }
};
