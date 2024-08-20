import { IOnErrorCheckValidateImage } from "@/shared/types/other";
import { TUpdatedFieldDevice } from "@/shared/types/products";
import { timer } from "@/shared/utils/timer";

export const onErrorCheckValidateImage = ({
  refButton,
  setFieldError,
}: IOnErrorCheckValidateImage<TUpdatedFieldDevice>) => {
  setFieldError("image", "Неверный URL изображения");
  const targetButton = refButton.current as HTMLButtonElement;

  targetButton.setAttribute("disabled", "true");

  targetButton.setAttribute("disabled", "disabled");
  targetButton.innerText = "😴";

  timer(3000, () => {
    targetButton.removeAttribute("disabled");
    setFieldError("image", "");
    targetButton.innerText = "Изменить изображение";
  });
};
