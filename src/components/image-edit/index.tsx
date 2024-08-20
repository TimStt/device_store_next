import React, { memo, useRef, useState } from "react";
import Image from "next/image";

import { setDefaoultImage } from "@/shared/utils/set-default-image";
import { TUpdatedFieldDevice } from "@/shared/types/products";
import { IImageOutput, IImageOutputBlock } from "@/shared/types/ui";
import { ModalMotion } from "@/shared/ui/modal-motion";
import InputChange from "../input-change";
import ButtonChangeImage from "./ui/button-change-image";
import { useChangeImage } from "./hooks/use-change-image-formik";
import ErrorAuth from "../error-auth";
import style from "./image-edit.module.scss";
import Spinner from "@/shared/ui/spinner";
import cls from "classnames";
import ImageChange from "./ui/image-change";
import { useField, useFormikContext } from "formik";

const ImageEdit = memo(({ width, height, hasError }: IImageOutputBlock) => {
  const { onChangeImage, values, errors, getFieldProps, refButton, isLoading } =
    useChangeImage();

  return (
    <div className={style.root}>
      <ImageChange width={width} height={height} alt={values.title} />
      <div className={style.root__inner}>
        <InputChange
          className={style.root__field}
          type="text"
          hasError={hasError}
          textError={errors.image}
          {...getFieldProps("image")}
        />

        <ButtonChangeImage
          onChangeImage={onChangeImage}
          loading={isLoading}
          ref={refButton}
          hasError={hasError}
        />
      </div>
    </div>
  );
});

ImageEdit.displayName = "ImageEditModal";

export default ImageEdit;
