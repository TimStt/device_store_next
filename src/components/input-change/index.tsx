import InputGroup from "@/components/input-group";
import { TUpdatedFieldDevice } from "@/shared/types/products";
import { IInputChangeDevice } from "@/shared/types/ui";
import React, { ChangeEvent, memo, useCallback } from "react";

import { translate } from "@/shared/utils/translate";
import Image from "next/image";
import { setDefaoultImage } from "@/shared/utils/set-default-image";
import cls from "classnames";
import style from "./input-change.module.scss";
import ErrorAuth from "../error-auth";
import Textarea from "@/shared/ui/textarea";

const InputChange = ({
  className,
  fieldName,

  children,
  hasError,
  textError,
  textarea,
  ...props
}: IInputChangeDevice) => {
  console.log("rerender " + fieldName);

  return (
    <InputGroup
      className={style.root}
      hasErrorInput={hasError}
      labelElement={
        fieldName && (
          <label className={style.root__label} htmlFor={fieldName}>
            {translate("ru", fieldName)}
          </label>
        )
      }
      classnameBlock={cls(className, style.root__block, {
        [style.invalid]: hasError,
      })}
      id={fieldName}
      {...props}
    >
      {" "}
      {children}
      {hasError && <ErrorAuth textError={textError} />}
    </InputGroup>
  );
};

export default InputChange;
