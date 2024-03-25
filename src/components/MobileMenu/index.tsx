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

const MenuMobile: React.FC = () => {
  const { totalCount } = useSelector(selectBasket);
  const { data: session } = useSession();
  const modalRef = React.createRef<HTMLDialogElement>();

  const [isOpenMenu, setOpenMenu] = useState(false);

  const openMenu = () => modalRef.current?.showModal();
  const closeMneu = () => modalRef.current?.close();

  useEffect(() => {
    isOpenMenu ? modalRef.current?.showModal() : modalRef.current?.close();
  }, [isOpenMenu, modalRef]);

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
            <li className={style.list__item}>
              <ProfileItem text="Профиль" href="/profile" />
            </li>
            <li className={style.list__item}>
              <Link href="/basket">
                <ShoppingBasket color="#9B9B9B" size={26} />
                <span>
                  Корзина <b>{totalCount || ""}</b>
                </span>
              </Link>
            </li>
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
