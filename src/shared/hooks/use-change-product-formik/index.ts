import validateAdminChange from "@/shared/libs/validate-actions-admin/validate-admin-change";
import {
  IUseChangeProduct,
  TSubmitChangeProduct,
} from "@/shared/types/products";
import { useFormik } from "formik";
import { useId } from "react";

export const useChangeProductFormik = ({
  onSubmit,
  initialValues,
}: IUseChangeProduct) => {
  const formik = useFormik({
    initialValues,
    validate: validateAdminChange,
    onSubmit,
  });

  const { errors, touched, values } = formik;

  const isCountDescription = values.description?.length;

  const errorsInputsStates = {
    image: !!errors.image && !!touched.image,
    title: !!errors.title && !!touched.title,
    description: !!errors.description && !!touched.description,
    price: !!errors.price && !!touched.price,
  };

  return {
    formik,
    errorsInputsStates,

    isCountDescription,
    textErrors: errors,
  };
};
