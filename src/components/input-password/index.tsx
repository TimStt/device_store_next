import ErrorAuth from "@/components/error-auth";
import InputGroup from "@/components/input-group";
import { User } from "lucide-react";
import React from "react";
import style from "./input-password.module.scss";
import { IInputsValidate } from "@/shared/types/ui";
import cls from "classnames";
import { useShowEyePassword } from "@/shared/hooks/use-show-eye-password";

const InputPassword = ({
  hasErrorInput,
  textError,
  className,
  placeholder,

  ...props
}: IInputsValidate) => {
  const [showPassword, iconEye] = useShowEyePassword();
  return (
    <InputGroup
      className={cls(style.root, className, {
        [style.invalid]: hasErrorInput,
      })}
      icon={
        <>
          {iconEye(style.root__eye)}
          <span className={style.root__smile}> </span>
        </>
      }
      classNameInnerBlock={style.root__inner_block}
      type={showPassword ? "password" : "text"}
      placeholder={placeholder || "Секретный пароль"}
      pattern=".{6,}"
      hasErrorInput={hasErrorInput}
      {...props}
    >
      {hasErrorInput && <ErrorAuth textError={textError} />}
    </InputGroup>
  );
};

export default InputPassword;
