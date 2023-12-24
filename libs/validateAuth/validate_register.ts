import { UserType } from "@/types";

const validate_register = (values: UserType) => {
  let errors: UserType = {
    email: "",
    password: "",
    cpassword: "",
    username: "",
  };

  const { email, password, cpassword } = values;

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email!)) {
    errors.email = "Недействительный домен почты";
  }

  if (password.length < 6) {
    errors.password = "Пароль должен содержать не менее 6 символов";
  } else if (password.length > 12) {
    errors.password = "Пароль должен содержать не более 12 символов";
  }

  if (cpassword && password !== cpassword) {
    errors = {
      ...errors,
      password: "Пароли не совпадают",
      cpassword: "Пароли не совпадают",
    };
  }

  Object.entries(values).find(([key, value]) => {
    !value ? (errors = { ...errors, [key]: `Обязательное поле` }) : "";
    value.includes(" ")
      ? (errors = { ...errors, [key]: `Уберите пробелы` })
      : "";
  });

  return errors;
};

export default validate_register;
