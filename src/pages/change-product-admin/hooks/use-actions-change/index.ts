import { chooseDevice } from "@/redux/selectors/actions-devices";
import { TUpdatedFieldDevice } from "@/shared/types/products";
import {
  ChangeEvent,
  FormEvent,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetChangeProduct } from "../use-get-product";
import {
  setSrcImageUpdate,
  setUpdatedFieldDevice,
} from "@/redux/slices/change-device-slice";
import { selectorUpdatedField } from "@/redux/selectors/change-devices";
import { productChangeThunk } from "@/redux/slices/product-actions-slice";
import { useSubmitChangeProduct } from "../use-change-product";
import { useChangeProductFormik } from "@/shared/hooks/use-change-product-formik";

export const useActionsChange = () => {
  const choosenDevice = useSelector(chooseDevice);
  const { onSubmit } = useSubmitChangeProduct();
  const dispatch = useDispatch();

  let initialValues = {
    price: choosenDevice?.price || 0,
    title: choosenDevice?.title || "",
    description: choosenDevice?.description || "",
    image: choosenDevice?.image || "",
  };

  const {
    formik,
    errorsInputsStates,

    isCountDescription,
    textErrors,
  } = useChangeProductFormik({
    onSubmit,
    initialValues,
  });

  useEffect(() => {
    console.log("choosenDevice");
    if (
      choosenDevice &&
      formik.values.description !== choosenDevice.description
    ) {
      console.log("if choosenDevice");
      formik.setFieldValue("price", choosenDevice.price || 0);
      formik.setFieldValue("title", choosenDevice.title);
      formik.setFieldValue("description", choosenDevice.description);
      formik.setFieldValue("image", choosenDevice.image);
      dispatch(
        setSrcImageUpdate({
          url: choosenDevice.image,
          objectUrl: choosenDevice.image,
        })
      );
    }
  }, [choosenDevice, formik, dispatch]);

  return {
    choosenDevice,
    errorsInputsStates,
    formik,

    isCountDescription,
    textErrors,
  };
};
