import { chooseDevice } from "@/redux/selectors/actions-devices";
import {
  TChangeFieldsDevice,
  TUpdatedFieldDevice,
} from "@/shared/types/products";
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetChangeProduct } from "../use-get-product";
import { setUpdatedFieldDevice } from "@/redux/slices/change-device-slice";
import {
  selectorChangeImage,
  selectorUpdatedField,
} from "@/redux/selectors/change-devices";
import { productChangeThunk } from "@/redux/slices/product-actions-slice";

export const useSubmitChangeProduct = () => {
  const choosenDevice = useSelector(chooseDevice);
  console.log(choosenDevice);
  const dispatch = useDispatch<AppDispatch>();
  const image = useSelector(selectorChangeImage);

  const onSubmit = (values: TChangeFieldsDevice) => {
    dispatch(
      productChangeThunk({
        ...values,
        id: choosenDevice?.id as string,
        image: image?.objectUrl as string,
      })
    );
  };

  // useEffect(() => {
  //   if (choosenDevice) {
  //     dispatch(
  //       setUpdatedFieldDevice({
  //         ...choosenDevice,
  //         id: choosenDevice.id,
  //         image: choosenDevice.image,
  //         description: choosenDevice.description,
  //         price: choosenDevice.price,
  //         title: choosenDevice.title,
  //       })
  //     );
  //   }
  // }, [choosenDevice]);

  return {
    choosenDevice,
    onSubmit,
  };
};
