import { inputAuthType } from "@/shared/types/products";
import { FormikErrors } from "formik";

const validateLogin = (values: inputAuthType) => {
  let errors: FormikErrors<inputAuthType> = {};

  const { password } = values;
  // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //   errors.email = "Недействительный домен почты";
  // }

  if (password.length < 6) {
    errors.password = "Пароль должен содержать не менее 6 символов";
  } else if (password.length > 12) {
    errors.password = "Пароль должен содержать не более 12 символов";
  }

  Object.entries(values).forEach(([key, value]) => {
    !value ? (errors = { ...errors, [key]: `Обязательное поле` }) : "";
    value.includes(" ")
      ? (errors = { ...errors, [key]: `Уберите пробелы` })
      : "";
  });

  return errors;
};

export default validateLogin;
