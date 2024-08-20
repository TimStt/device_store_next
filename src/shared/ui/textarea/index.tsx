import { IPropsTextarea } from "@/shared/types/ui";
import React from "react";
import style from "./textarea-ui.module.scss";
import cls from "classnames";
import ErrorAuth from "@/components/error-auth";
const Textarea = ({
  viewSymbol,
  classNameMaxLength,
  className,
  labelElement,
  hasErrorInput,
  classNameField,
  children,
  textError,
  ...props
}: IPropsTextarea) => {
  return (
    <div className={cls(style.root, className)}>
      {labelElement}
      <div className={style.root__inner}>
        <textarea
          className={cls(style.root__field, classNameField, {
            [style.invalid]: hasErrorInput,
          })}
          maxLength={viewSymbol?.maxLength}
          {...props}
        />

        {viewSymbol?.maxLength && (
          <span className={cls(style.root__maxLength, classNameMaxLength)}>
            {viewSymbol.lenght} / {viewSymbol.maxLength}
          </span>
        )}
      </div>
      {children}
      {hasErrorInput && <ErrorAuth textError={textError} />}
    </div>
  );
};

export default Textarea;
