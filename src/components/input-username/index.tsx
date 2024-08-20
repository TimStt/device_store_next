import ErrorAuth from "@/components/error-auth";
import InputGroup from "@/components/input-group";
import { User } from "lucide-react";
import React, { memo } from "react";
import style from "./input-username.module.scss";
import { IInputsValidate } from "@/shared/types/ui";
import cls from "classnames";

const InputUserName = memo(
  ({
    hasErrorInput,
    textError,
    className,

    ...props
  }: IInputsValidate) => {
    console.log("InputUserName", props.value);
    return (
      <InputGroup
        className={cls(style.root, className)}
        icon={<User className={style.root__icon} size={24} />}
        classnameBlock={style.root__input_block}
        type="text"
        hasErrorInput={hasErrorInput}
        placeholder="Введите свое имя"
        classNameInnerBlock={style.root__inner_block}
        {...props}
      >
        {hasErrorInput && <ErrorAuth textError={textError} />}
      </InputGroup>
    );
  }
);

InputUserName.displayName = "InputUserName";

export default InputUserName;
