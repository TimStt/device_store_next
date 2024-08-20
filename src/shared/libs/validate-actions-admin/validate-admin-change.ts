import {
  IErrorsChangeProduct,
  TChangeFieldsDevice,
  TUpdatedFieldDevice,
} from "@/shared/types/products";
import { validateUrl } from "@/shared/utils/validate-url";

const validateAdminChange = (values: TChangeFieldsDevice) => {
  let errors: IErrorsChangeProduct = {};

  const { price, description, image } = values;

  if (description?.length > 400) {
    errors.description = "Описание не должно превышать 400 символов";
  }
  if (description?.length < 10) {
    errors.description = "Описание должно быть не менее 10 символов";
  }
  Object.entries(values).forEach(([key, value]) => {
    !value ? (errors = { ...errors, [key]: `Обязательное поле` }) : "";
  });

  if (!validateUrl(image)) {
    errors.image = "Неверный формат ссылки";
  }

  if (!Number(price)) {
    errors.price = "Цена должна быть числовым значением";
  }
  return errors;
};

export default validateAdminChange;
