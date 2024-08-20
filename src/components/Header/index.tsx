import React from "react";
import style from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import ProfileItem from "./ui/profile-item";
import MenuNav from "./ui/menu-nav";
import cls from "classnames";
import { paths } from "@/shared/config/paths";
import { useGetProductsBasket } from "@/shared/hooks/use-get-product-basket";

const Header: React.FC = () => {
  const { data: session } = useSession();
  useGetProductsBasket();
  return (
    <header className={cls(style.root, "container")}>
      <div className={style.root__wrapper}>
        <Link href={paths.home}>
          <div className={style.root__logo}>
            <Image src="/logo.svg" alt="sdsds" width={60} height={60} />
            <div>
              <h3>Comrade</h3>
              <span>Лучшие продукты - здесь</span>
            </div>
          </div>
        </Link>

        {session ? (
          <MenuNav />
        ) : (
          <ProfileItem text="Войти" href={paths.login} />
        )}
      </div>
    </header>
  );
};

export default Header;
