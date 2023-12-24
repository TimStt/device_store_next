import { UserType, inputAuthType } from "@/types";
import axios from "axios";
import { hash } from "bcryptjs";

const signup = async ({ email, password, username }: UserType) => {
  const apiUrl = "https://fakestoreapi.com/users";

  try {
    const { data: users } = await axios.get<UserType[]>(`${apiUrl}`);

    const checkDuplicate = users.find((user) => user.email === email);

    if (checkDuplicate) return "Такой пользователь есть!";

    const data = await axios.post(apiUrl, {
      email: email,
      username: username,
      password: hash(password, 12),
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("error message: ", error.message);
      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      throw new Error("Возникла непредвиденная ошибка");
    }
  }
};
export default signup;
