import apiInstance from "@/shared/config/apiinstance";
import { IUser } from "@/shared/types/auth";
import axios from "axios";

export const getUserByName = async (usernameFind: string) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL_USERS;
  const { data: users } = await axios.get<IUser[]>(`${API_URL}/users`);
  const findUser = users.find(({ username }) => username === usernameFind);
  return findUser;
};
