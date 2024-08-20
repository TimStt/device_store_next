import React from "react";
import { menu_mobil } from "../../menu-items.data";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import style from "./list-menu-modal.module.scss";

import { CircleUserRound, Home, LogOut, ShoppingBasket } from "lucide-react";
import { setStateModalMobileMenu } from "@/redux/slices/mobile-menu-modal";
import { useDispatch } from "react-redux";
import { paths } from "@/shared/config/paths";
import { useRouter } from "next/router";

const ListMenuModal: React.FC = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setStateModalMobileMenu(false));
  };
  const router = useRouter();

  const clickAuthButton = () => {
    if (session) {
      signOut();
    }
    closeModal();
    router.push(paths.login);
  };

  const { data: session } = useSession();

  return (
    <ul className={style.root}>
      <li className={style.root__item}>
        <Link href={paths.home} onClick={closeModal}>
          <Home color="#9B9B9B" size={26} />
          <span>Главная</span>
        </Link>
      </li>

      {session && (
        <li className={style.root__item}>
          <Link href={paths.profile} onClick={closeModal}>
            <CircleUserRound color="#9B9B9B" size={26} />
            <span>Профиль</span>
          </Link>
        </li>
      )}

      <li className={style.root__item}>
        <Link href={paths.basket} onClick={closeModal}>
          <ShoppingBasket color="#9B9B9B" size={26} />
          <span>Корзина</span>
        </Link>
      </li>

      <li className={style.root__item}>
        <button onClick={clickAuthButton}>
          <LogOut />
          <span>{session ? "Выйти" : "Войти"} </span>
        </button>
      </li>
    </ul>
  );
};

export default ListMenuModal;
