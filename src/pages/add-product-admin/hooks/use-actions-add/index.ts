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

import {
  setSrcImageUpdate,
  setUpdatedFieldDevice,
} from "@/redux/slices/change-device-slice";
import { selectorUpdatedField } from "@/redux/selectors/change-devices";
import { productChangeThunk } from "@/redux/slices/product-actions-slice";
import { useSubmitAddProduct } from "../use-add-product";
import { useChangeProductFormik } from "@/shared/hooks/use-change-product-formik";

export const useActionsAdd = () => {
  const { onSubmit } = useSubmitAddProduct();
  const dispatch = useDispatch();
  let initialValues = {
    price: 0,
    title: "",
    description: "",
    image: "",
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
    dispatch(
      setSrcImageUpdate({
        url: "",
        objectUrl: "",
      })
    );
  }, [dispatch]);

  return {
    errorsInputsStates,
    formik,

    isCountDescription,
    textErrors,
  };
};
