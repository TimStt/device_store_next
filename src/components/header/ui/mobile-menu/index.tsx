import { CircleUserRound, LogOut, Menu, ShoppingBasket, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import style from "./mobile-menu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import cls from "classnames";

import React from "react";
import { menu_mobil } from "./menu-items.data";
import { selectTotalCount } from "@/redux/selectors/basket";
import { useTriggerActionsModal } from "@/shared/hooks/use-trigger-actions-modal";
import { ModalMotion } from "@/shared/ui/modal-motion";

import { selectMobileMenuModal } from "@/redux/selectors/mobile-modal";
import { setStateModalMobileMenu } from "@/redux/slices/mobile-menu-modal";
import { nanoid } from "@reduxjs/toolkit";
import MobileMenuButton from "../mobile-menu-button";
import ListMenuModal from "./ui/list-menu-modal";

const MenuMobile: React.FC = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const isOpen = useSelector(selectMobileMenuModal);
  useTriggerActionsModal({
    modalRef,
    isOpen,
    setState: setStateModalMobileMenu,
  });

  return (
    <>
      <ModalMotion className={style.root} ref={modalRef} state={isOpen}>
        <div className={style.root__wrapper}>
          <MobileMenuButton
            className={style.root__close}
            icon={<X />}
            text="Закрыть мобильное меню"
          />
          <ListMenuModal />
        </div>
      </ModalMotion>
    </>
  );
};

export default MenuMobile;
