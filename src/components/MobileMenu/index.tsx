import { selectBasket } from "@/src/redux/slice/basketSlice";
import { CircleUserRound, LogOut, Menu, ShoppingBasket, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import style from "./_mobileMenu.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import cls from "classnames";
import ProfileItem from "../ProfileItem";
import React from "react";
import { menu_mobil } from "./mobile-items.data";

const MenuMobile: React.FC = () => {
  const { totalCount } = useSelector(selectBasket);

  const modalRef = React.createRef<HTMLDialogElement>();

  const openMenu = () => modalRef.current?.showModal();
  const closeMneu = () => modalRef.current?.close();

  return (
    <>
      <button className={style.toggle__btn} onClick={openMenu}>
        <span className="visually-hidden">Открыть навигацию по сайту</span>
        <Menu />
      </button>

      <dialog className={style.root} ref={modalRef}>
        <div className={style.root__wrapper}>
          <button className={style.toggle__btn} onClick={closeMneu}>
            <span className="visually-hidden">Открыть навигацию по сайту</span>
            <X />
          </button>
          <ul className={style.list}>
            {menu_mobil.map(({ href, text, icon }) => (
              <li className={style.list__item} key={href}>
                <Link href={href} onClick={closeMneu}>
                  {icon}
                  <span>{text}</span>
                </Link>
              </li>
            ))}

            <li className={style.list__item}>
              <button onClick={() => signOut()}>
                <LogOut />
                <span>Выйти </span>
              </button>
            </li>
          </ul>
        </div>
      </dialog>
    </>
  );
};

export default MenuMobile;
