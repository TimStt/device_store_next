import React, { useEffect, useRef, useState } from "react";
import style from "./_header.module.scss";
import Image from "next/image";
import { CircleUserRound, Menu, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectBasket } from "@/src/redux/slice/basketSlice";
import MenuDekstop from "../MenuNav";
import MenuMobile from "../MobileMenu";
import MenuNav from "../MenuNav";
import ProfileItem from "../ProfileItem";

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
                <h3>Comrade</h3>
                <span>Лучшие продукты - здесь</span>
              </div>
            </div>
          </Link>

          {session ? <MenuNav /> : <ProfileItem text="Войти" href="/login" />}
        </div>
      </div>
    </header>
  );
};

export default Header;
