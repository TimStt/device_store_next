import { useChangeProductFormik } from "@/shared/hooks/use-change-product-formik";
import { validateChangeImage } from "@/shared/libs/validate-actions-admin/validate-change-image";
import { TUpdatedFieldDevice } from "@/shared/types/products";
import {
  FieldHelperProps,
  FieldInputProps,
  FieldProps,
  FormikHelpers,
  FormikProps,
  FormikRegistration,
  useFormik,
  useFormikContext,
} from "formik";
import { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setSrcImageUpdate } from "@/redux/slices/change-device-slice";
import { selectorUpdatedField } from "@/redux/selectors/change-devices";
import { checkValidateUrlImage } from "@/shared/api/check-validate-url-image";
import toast from "react-hot-toast";
import { IResultCheckValidateImage } from "@/shared/types/api";
import { timer } from "@/shared/utils/timer";

import { onSeccessCheckValidateImage } from "../../utils/on-seccess-check-validate-image";
import { IOnErrorCheckValidateImage } from "@/shared/types/other";
import { text } from "stream/consumers";
import { onErrorCheckValidateImage } from "../../utils/on-error-check-validate-image";

export const useChangeImage = () => {
  const dispatch = useDispatch();

  const { getFieldProps, errors, values, setFieldError } =
    useFormikContext<TUpdatedFieldDevice>();

  const hashMapImage = useRef(new Map<string, IResultCheckValidateImage>());
  const [isLoading, setLoading] = useState(false);
  const refButton = useRef<HTMLButtonElement>(null);

  const [isDisabledChange, setDisabledChange] = useState(false);

  const onChangeImage: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    let result: IResultCheckValidateImage;
    const src = values.image;
    if (hashMapImage.current.has(src)) {
      result = hashMapImage.current.get(src)!;
    } else {
      result = await checkValidateUrlImage(src, setLoading);
      hashMapImage.current.set(src, result);
    }

    if (result.isValid) {
      onSeccessCheckValidateImage({
        result,
        dispatch,
      });
      return;
    }

    setDisabledChange(true);
  };

  useEffect(() => {
    if (isDisabledChange) {
      setDisabledChange(false);
      onErrorCheckValidateImage({
        refButton,
        setFieldError,
      });
    }
  }, [isDisabledChange, setFieldError]);

  return {
    onChangeImage,
    isLoading,
    getFieldProps,
    values,
    errors,
    refButton,
  };
};
