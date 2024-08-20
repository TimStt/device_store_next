import axios from "axios";
import { hash } from "bcryptjs";
import { IUser, IUserFormik } from "../types/auth";

const signup = async ({
  email,
  password,
  username,
}: IUserFormik): Promise<IUserFormik | string> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_USERS! + "/users";

  try {
    const { data: users } = await axios.get<IUser[]>(`${apiUrl}`);

    const checkDuplicate = users.find((user) => user.email === email);

    if (checkDuplicate) return "Такой пользователь есть!";

    const { data: user } = await axios.post(apiUrl, {
      email: email,
      username: username,
      password: await hash(password, 12),
    });

    return user;
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
