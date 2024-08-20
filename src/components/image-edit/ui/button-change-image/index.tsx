import React, { forwardRef, memo } from "react";

import style from "./button-change-image.module.scss";
import { IUIButtonChangeImage } from "@/shared/types/ui";
import Spinner from "@/shared/ui/spinner";
import PulseLoader from "@/shared/ui/pulse-loader";

const ButtonChangeImage = forwardRef<HTMLButtonElement, IUIButtonChangeImage>(
  ({ onChangeImage, loading, hasError }, ref) => {
    return (
      <button
        className={style.root}
        onClick={onChangeImage}
        type="button"
        disabled={loading || hasError}
        title="Изменить изображение"
        ref={ref}
      >
        {loading ? (
          <>
            {" "}
            <span>Идет изменение...</span>
            <Spinner size={10} strokeWidth={2} />
          </>
        ) : hasError ? (
          "😴"
        ) : (
          "Изменить изображение"
        )}
      </button>
    );
  }
);

ButtonChangeImage.displayName = "ButtonChangeImage";

export default ButtonChangeImage;
