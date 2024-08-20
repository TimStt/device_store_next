import { setSrcImageUpdate } from "@/redux/slices/change-device-slice";
import { IResultCheckValidateImage } from "@/shared/types/api";
import { IOnSeccessCheckValidateImage } from "@/shared/types/other";
import toast from "react-hot-toast";

export const onSeccessCheckValidateImage = async ({
  result,
  dispatch,
}: IOnSeccessCheckValidateImage) => {
  dispatch(
    setSrcImageUpdate({
      url: result.url,
      objectUrl: result.objectUrl,
    })
  );
  toast.success("Изображение изменено");
};
