import React from "react";
import { useSubmitAuth } from "../../hooks/use-submit-auth";

import style from "./providers-submit.module.scss";
import Google from "../../../../../public/svg/google.svg";
import GitHub from "../../../../../public/svg/git-hub.svg";
import Spinner from "@/shared/ui/spinner";
import { TProviders } from "@/shared/types/auth";
import cls from "classnames";

const ProvidersSubmit = ({ provider }: { provider: TProviders }) => {
  const { isLoadingProviders, onSubmitWithProviders } = useSubmitAuth();

  return (
    <button
      className={cls(style.root, style[provider])}
      disabled={isLoadingProviders}
      onClick={() => onSubmitWithProviders(provider)}
    >
      <span>
        {isLoadingProviders ? (
          <Spinner size={10} strokeWidth={2} />
        ) : (
          `Войти с помощью ${provider}`
        )}
      </span>
      {
        {
          google: <Google className={style.icon} />,
          github: <GitHub className={style.icon} />,
        }[provider]
      }
    </button>
  );
};

export default ProvidersSubmit;
