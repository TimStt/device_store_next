import {
  FieldInputProps,
  FieldProps,
  FormikErrors,
  FormikFormProps,
  FormikProps,
  FormikState,
  FormikValues,
} from "formik";
import {
  ChangeEvent,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  RefObject,
  TextareaHTMLAttributes,
} from "react";
import { IDevicesTypes, TUpdatedFieldDevice } from "../products";
import { IUser } from "../auth";
import { paths } from "@/shared/config/paths";
import { Session } from "next-auth";
import { ImageProps } from "next/image";
import {
  Action,
  ActionCreator,
  ActionCreatorWithPayload,
  Dispatch,
  PayloadAction,
} from "@reduxjs/toolkit";
import { NextApiRequest } from "next/types";

export interface IInputGroup extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  classnameBlock?: string;
  classnameInput?: string;
  icon?: React.ReactNode;
  labelElement?: React.ReactNode;
  hasErrorInput?: boolean;
  classNameInnerBlock?: string;
}

export interface IInputsValidate extends InputHTMLAttributes<HTMLInputElement> {
  hasErrorInput: boolean;
  textError?: string;
}

export interface ILayoutAuth {
  children: React.ReactNode;
  title?: string;
}

export interface ICardProductAdmin extends IPropsDevice {
  indexDevice: number;
}

export interface IInputChangeDevice
  extends InputHTMLAttributes<HTMLInputElement> {
  fieldName?: keyof Omit<TUpdatedFieldDevice, "id">;
  className?: string;
  hasError?: boolean;
  textError?: string;
  children?: React.ReactNode;
  textarea?: boolean;
}
export type TUpdateFieldValues = TUpdatedFieldDevice[keyof TUpdatedFieldDevice];
export interface IImageOutputBlock
  extends Pick<IInputChangeDevice, "children" | "className"> {
  width: number;
  height: number;

  hasError: boolean;
}

export type IImageOutput = Pick<IImageOutputBlock, "width" | "height"> & {
  alt?: string;
};

export interface IPropsDevices {
  devices: IDevicesTypes[];
}

export interface IPropsDevice {
  device: IDevicesTypes;
}
export interface TAsideActionsDevice {
  session: Session | null;
  device: IDevicesWithImagePlaceholder;
}

export interface IPersonalProductState {
  device: IDevicesWithImagePlaceholder | null;
}
export interface IDevicesWithImagePlaceholder
  extends Omit<IDevicesTypes, "image"> {
  image: {
    src: string;
    placeholder: string;
  };
}

export interface IProfileItemProps {
  text: string;
  href: string;
  children?: React.ReactNode;
}

export interface IProfileInfoProps {
  user: IUser;
}

export interface IEmptyPage {
  title: string;
  description?: string;
  image: string;
  backLink: TPathsEmptyPage;
  textLink?: string;
}

export type TPathsEmptyPage = keyof Omit<
  typeof paths,
  "productPersonPage" | "adminChangeId" | "adminList"
>;

export interface ISubmitChangeProps {
  textButton?: string;
  icon?: React.ReactNode;
}

export interface IModel extends HTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
  state?: boolean;
  isOpenFlex?: boolean;
}

export interface IUseTriggerActionsModal {
  isOpen: boolean;

  setState: TSetStateModal;
  modalInnerRef?: RefObject<HTMLDivElement>;
  modalRef: RefObject<HTMLDialogElement>;
}

export interface IValuesChangeImage {
  src: string;
}

export interface IHandlerDefaultImage {
  alt: string;

  setSrc: (src: string) => void | React.SyntheticEvent<HTMLImageElement, Event>;
}

export type TSetStateModal = ActionCreatorWithPayload<boolean>;

export interface IModalChangeImageState {
  isOpen: boolean;
  image: IModalChangeImageInitial | null;
}

export interface IModalChangeImageInitial {
  widthImage: number;
  heightImage: number;
  srcImage: string;
  altImage: string;
}

export interface IUIButtonChangeImage {
  onChangeImage: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  hasError: boolean;
}
export interface IPulseLoaderProps {
  size: number;
  className?: string;
  color?: string;
  duration?: string;
  gap?: number;
}

export interface IPropsTextarea
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<
      IInputGroup,
      "labelElement" | "className" | "hasErrorInput" | "children"
    > {
  viewSymbol?: IViewSymbolTextarea;
  classNameField?: string;
  classNameMaxLength?: string;
  textError?: string;
}

export interface IViewSymbolTextarea {
  maxLength: number;
  lenght: number;
}

export interface IMobileMenuButton {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

export type TActionTypeModal = "open" | "close";

export interface IUseSetStateModal {
  nameStateModal: string;
  setStateModal: TSetStateModal;
}

export interface IUsePagination<ProductLst> {
  productsList: ProductLst[];
  maxItemPage: number;
}
export type TOnChangePagination = (
  event: React.ChangeEvent<unknown>,
  page: number
) => void;

export interface IPaginationAdminList {
  totalPages: number;
  onChange: TOnChangePagination;
  currentPage: number;
}
