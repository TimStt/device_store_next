import { chooseDevice } from "@/redux/selectors/actions-devices";
import {
  IAddFieldDevice,
  TChangeFieldsDevice,
  TUpdatedFieldDevice,
} from "@/shared/types/products";
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUpdatedFieldDevice } from "@/redux/slices/change-device-slice";
import {
  selectorChangeImage,
  selectorUpdatedField,
} from "@/redux/selectors/change-devices";
import {
  productAddThunk,
  productChangeThunk,
} from "@/redux/slices/product-actions-slice";

export const useSubmitAddProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const image = useSelector(selectorChangeImage);

  const onSubmit = (values: TChangeFieldsDevice) => {
    dispatch(
      productAddThunk({
        ...values,
        image: image?.objectUrl as string,
      })
    );
  };

  return {
    onSubmit,
  };
};
