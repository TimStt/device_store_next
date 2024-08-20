import { IValuesChangeImage } from "@/shared/types/ui";
import { validateUrl } from "@/shared/utils/validate-url";

export const validateChangeImage = (values: IValuesChangeImage) => {
  if (validateUrl(values.src)) {
    return { src: "Неверный формат ссылки" };
  }

  return {};
};
