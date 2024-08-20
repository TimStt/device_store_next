import React, { memo } from "react";
import Image from "next/image";
import style from "./image-change.module.scss";
import cls from "classnames";
import { IImageOutput } from "@/shared/types/ui";
import { useSelector } from "react-redux";
import { selectorChangeImage } from "@/redux/selectors/change-devices";

const ImageChange = ({ width, height, alt }: IImageOutput) => {
  const changeImage = useSelector(selectorChangeImage);
  return (
    <Image
      className={cls(style.root)}
      loading="lazy"
      width={width}
      height={height}
      src={changeImage?.objectUrl || "/placeholder.jpg"}
      alt={alt || "not image"}
    />
  );
};

export default ImageChange;
