import { NextApiRequest, NextApiResponse } from "next/types";

export interface ApiRequestGetImage extends NextApiRequest {
  query: {
    url: string;
  };
}

export type ApiResponseGetImage = NextApiResponse<
  WritableStream<Uint8Array> | IErrorResponse
>;

export interface IErrorResponse {
  error: string;
}

export type TImageUpdate = Pick<IResultCheckValidateImage, "url" | "objectUrl">;

export interface IResultCheckValidateImage {
  isValid: boolean;
  url: string;
  objectUrl: string;
}
