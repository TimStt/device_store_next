import { selectorUpdatedField } from "@/redux/selectors/change-devices";
import { productChangeThunk } from "@/redux/slices/product-actions-slice";
import { Save } from "lucide-react";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./submit-change.module.scss";
import { selectorChangeLoading } from "@/redux/selectors/actions-devices";
import Spinner from "@/shared/ui/spinner";
import { ISubmitChangeProps } from "@/shared/types/ui";

const SubmitChange = ({ textButton, icon }: ISubmitChangeProps) => {
  const loading = useSelector(selectorChangeLoading);

  return (
    <button
      className={style.root}
      type="submit"
      disabled={loading}
      title={textButton}
    >
      {loading ? (
        <Spinner size={15} />
      ) : (
        <>
          <span>{textButton}</span>
          {icon}
        </>
      )}
    </button>
  );
};

export default SubmitChange;
