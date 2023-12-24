import React, { useState } from "react";
import style from "./_header.module.scss";
import Image from "next/image";
import { CircleUserRound, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const profile = (href: string, value: string) => {
  return (
    <Link href={href}>
      <CircleUserRound color="#9B9B9B" size={26} />
      <span>{value}</span>
    </Link>
  );
};

const user = () => {
  return (
    <>
      <Link href="/basket">
        <ShoppingBasket color="#9B9B9B" size={26} />
        <span>Корзина</span>
      </Link>
      {profile("/profile", "Профиль")}
    </>
  );
};
const ghost = () => profile("/login", "Войти");

const Header: React.FC = () => {
  const { data: session } = useSession();
  return (
    <header className={style.root}>
      <div className="container">
        <div className={style.wrapper}>
          <Link href="/">
            <div className={style.logo}>
              <Image src="/logo.svg" alt="sdsds" width={60} height={60} />
              <div>
                <h2>Comrade</h2>
                <span>Лучшие продукты - здесь</span>
              </div>
            </div>
          </Link>
          <nav className={style.nav}>{session ? user() : ghost()}</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
