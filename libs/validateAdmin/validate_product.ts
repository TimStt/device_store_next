import { DevicesTypes, inputAuthType } from "@/types";

const validate_login = (values: DevicesTypes) => {
  let errors = {
    id: "",
    title: "",
    price: "",
    image: "",
    description: "",
  };

  const { price } = values;

  if (!Number(price)) {
    errors.price = "Цена должна быть числовым значением";
  }
  Object.entries(values).find(([key, value]) => {
    !value ? (errors = { ...errors, [key]: `Обязательное поле` }) : "";
  });
  return errors;
};

export default validate_login;
