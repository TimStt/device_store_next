import apiInstance from "@/shared/config/apiinstance";
import axios from "axios";
import toast from "react-hot-toast";

export const createItemOnDb = async <PostData>(
  collection: "products" | "users",
  postData: PostData
) => {
  try {
    if (collection === "users") {
      const URL_API = process.env.NEXT_PUBLIC_API_URL_USERS;
      return await axios.post(`${URL_API}/${collection}`, postData);
    }

    await apiInstance.post(`/${collection}`, postData);
    toast.success(
      `${
        collection === "products" ? "Продукт" : "Пользователь"
      } добавлен успешно`
    );
  } catch (error) {
    console.error((error as Error).message);
  }
};
