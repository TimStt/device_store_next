import ErrorAuth from "@/components/error-auth";
import InputGroup from "@/components/input-group";
import { AtSign, User } from "lucide-react";
import React from "react";
import style from "./input-email.module.scss";
import { IInputsValidate } from "@/shared/types/ui";
import cls from "classnames";

const InputEmail = ({
  hasErrorInput,
  textError,
  className,
  ...props
}: IInputsValidate) => {
  return (
    <InputGroup
      className={cls(className, style.root)}
      icon={<AtSign className={style.root__icon} size={24} />}
      type="email"
      hasErrorInput={hasErrorInput}
      placeholder="Ваша почта"
      classNameInnerBlock={style.root__inner_block}
      {...props}
    >
      {hasErrorInput && <ErrorAuth textError={textError} />}
    </InputGroup>
  );
};

export default InputEmail;
