import { FormikErrors } from "formik";
import { IResultCheckValidateImage, TImageUpdate } from "../api";

export interface RatingTypes {
  rate: number;
  count: number;
}

export interface IDevicesTypes {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: RatingTypes;
  category: string;
  description: string;

  countBuy: number;
}

export interface navItemsProfile {
  name: string;
  href: string;
}

export interface inputAuthType {
  username: string;
  password: string;
  cpassword?: string;
  nickName?: string;
}

export interface IStateProductsListAdmin {
  products: IDevicesTypes[];
  loading: boolean;
}
export interface stateProductsActions {
  product: IDevicesTypes | null;
  getLoading: boolean;
  addLoading: boolean;
  changeLoading: boolean;
  deleteLoading: boolean;
}

export interface RootStateBasket {
  basket: IStateBasket;
}

export interface IStateBasket {
  totalPrice: number;
  totalCount: number;

  busketProduct: IDevicesInBasket[];
}

export interface IStateChangeDevice {
  updatedFieldDevice: TUpdatedFieldDevice | null;
  changeImage: TImageUpdate | null;
}

export type TUpdatedFieldDevice = Pick<
  IDevicesTypes,
  "price" | "image" | "description" | "title" | "id"
>;

export type TChangeFieldsDevice = Omit<TUpdatedFieldDevice, "id">;

export type IAddFieldDevice = Omit<TUpdatedFieldDevice, "id">;

export type IErrorsChangeProduct = FormikErrors<TChangeFieldsDevice>;

export interface IDevicesInBasket extends IDevicesTypes {
  count: number;
  totalPrice: number;
}

export interface ICatalog {
  catalogProducts: IDevicesTypes[] | null;
}

export interface IUseChangeProduct {
  onSubmit: TSubmitChangeProduct;
  initialValues: TChangeFieldsDevice;
}

export type TSubmitChangeProduct = (values: TChangeFieldsDevice) => void;
