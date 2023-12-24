import { inputAuthType } from "@/types";

const validate_login = (values: inputAuthType) => {
  let errors: inputAuthType = {
    username: "",
    password: "",
  };

  const { password } = values;
  // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //   errors.email = "Недействительный домен почты";
  // }

  if (password.length < 6) {
    errors.password = "Пароль должен содержать не менее 6 символов";
  } else if (password.length > 12) {
    errors.password = "Пароль должен содержать не более 12 символов";
  }

  Object.entries(values).find(([key, value]) => {
    !value ? (errors = { ...errors, [key]: `Обязательное поле` }) : "";
    value.includes(" ")
      ? (errors = { ...errors, [key]: `Уберите пробелы` })
      : "";
  });

  return errors;
};

export default validate_login;
