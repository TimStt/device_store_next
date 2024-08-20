import { cleanBusket } from "@/redux/slices/basket-slice";
import React from "react";
import { useDispatch } from "react-redux";
import style from "./clean-button.module.scss";
import { Trash, X } from "lucide-react";

const CleanButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className={style.root}
      onClick={() => dispatch(cleanBusket())}
      title="Очистить корзину"
    >
      <span>Очистить корзину</span> <Trash size={18} color="red" />
    </button>
  );
};

export default CleanButton;
