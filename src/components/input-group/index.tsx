import React, { forwardRef } from "react";
import cls from "classnames";
import style from "./input-group.module.scss";
import { IInputGroup } from "@/shared/types/ui";

const InputGroup = forwardRef<HTMLInputElement, IInputGroup>(
  (
    {
      children,
      classnameBlock,
      classnameInput,
      icon,
      className,
      labelElement,
      hasErrorInput,
      classNameInnerBlock,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cls(style.root, classnameBlock, {
          [style.invalid]: hasErrorInput,
          [style.iconNone]: !icon,
        })}
      >
        {!!icon ? (
          <div className={cls(style.root__inner, classNameInnerBlock)}>
            {labelElement}
            <input className={className} ref={ref} {...props} />
            {icon}
          </div>
        ) : (
          <>
            {labelElement}
            <input ref={ref} {...props} />
          </>
        )}

        {children}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
