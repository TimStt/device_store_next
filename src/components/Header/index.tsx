import React, { useEffect, useRef, useState } from "react";
import style from "./_header.module.scss";
import Image from "next/image";
import { CircleUserRound, Menu, ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectBasket } from "@/src/redux/slice/basketSlice";
import MenuDekstop from "../MenuDekstop";
import MenuMobile from "../MobileMenu";

const Header: React.FC = () => {
  const widthMobileMenu = 750;
  const [isWidthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      setWidthWindow(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
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

          {isWidthWindow < widthMobileMenu ? <MenuMobile /> : <MenuDekstop />}
        </div>
      </div>
    </header>
  );
};

export default Header;
