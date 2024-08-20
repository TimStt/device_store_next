import { IMobileMenuButton } from "@/shared/types/ui";
import React from "react";
import style from "./mobile-menu-button.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectMobileMenuModal } from "@/redux/selectors/mobile-modal";
import { setStateModalMobileMenu } from "@/redux/slices/mobile-menu-modal";

import cls from "classnames";

const MobileMenuButton = ({ icon, text, className }: IMobileMenuButton) => {
  const dispatch = useDispatch<AppDispatch>();
  const stateModal = useSelector(selectMobileMenuModal);
  return (
    <button
      className={cls(style.root, className)}
      onClick={() => dispatch(setStateModalMobileMenu(!stateModal))}
    >
      <span className="visually-hidden">{text}</span>
      {icon}
    </button>
  );
};

export default MobileMenuButton;
