import { FormikHelpers } from "formik";
import { TUpdatedFieldDevice } from "../products";
import { IResultCheckValidateImage } from "../api";

export interface IOnErrorCheckValidateImage<T> {
  refButton: React.RefObject<HTMLButtonElement>;
  setFieldError: FormikHelpers<T>["setFieldError"];
}

export interface IOnSeccessCheckValidateImage {
  result: IResultCheckValidateImage;
  dispatch: AppDispatch;
}
