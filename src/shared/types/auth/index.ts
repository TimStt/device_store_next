import { FormikProps, FormikSharedConfig, FormikState } from "formik";
import { SignInResponse } from "next-auth/react";
import { NextRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export interface IUserAuth extends IUser {
  cpassword: string;
}

export interface IUserFormik
  extends Omit<
    IUserAuth,
    "id" | "__v" | "phone" | "image" | "address" | "name" | "createdAt"
  > {
  username: string;
}

export type IUserLogin = Pick<IUserFormik, "username" | "password">;

export interface IUser {
  id: string;
  createdAt: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  image: string;
}

export type IUserFree = {
  id: string;
} & Partial<Omit<IUser, "password" | "createdAt">>;

export interface IUserStateFree {
  user: IUserFree;
}

export interface IUserName {
  firstname: string;
  lastname: string;
}
export interface IUserAdress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: IUserGeolocation;
}
export interface IUserGeolocation {
  lat: string;
  long: string;
}

export type TSubmitName = TProviders | "credentials";
export type TProviders = "google" | "github";
export type TSetLoading = Dispatch<SetStateAction<boolean>>;

export interface IAuthActions {
  setLoading: TSetLoading;
}

export interface ISignUp extends IAuthActions {
  user: IUserFormik;
}

export interface ISignInWithProviders extends IAuthActions {
  provider: TProviders;
}
export interface ISignInWithCredentials extends IAuthActions {
  user: IUserLogin;
}

export type TResultAuth = {
  ok: boolean;
  error: string | false;
  url?: string;
};

export interface IOnDisplayResults {
  result: TResultAuth;

  textSuccessfullyToast: string;
}
