import { selectBasket } from "@/src/redux/slice/basketSlice";
import { LogOut, Menu, ShoppingBasket } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import style from "./_mobileMenu.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { profileMenu } from "../MenuDekstop";

const MenuMobile: React.FC = () => {
  const { totalCount } = useSelector(selectBasket);
  const { data: session } = useSession();

  const [isOpenMenu, setOpenMenu] = useState(false);
  //   if (!session) return profile("/login", "Войти");

  return (
    <>
      <button
        className={style.toggle__btn}
        onClick={() => setOpenMenu(!isOpenMenu)}
      >
        <span className={style.hidden__text}>Открыть навигацию по сайту</span>
        <Menu />
      </button>

      {isOpenMenu && (
        <nav className={style.root}>
          <ul className={style.list}>
            <li>
              <button
                className={style.toggle__btn}
                onClick={() => setOpenMenu(!isOpenMenu)}
              >
                <span className={style.hidden__text}>
                  Открыть навигацию по сайту
                </span>
                <Menu />
              </button>
            </li>
            <li>{profileMenu("/profile", "Профиль")}</li>
            <li>
              <Link href="/basket">
                <ShoppingBasket color="#9B9B9B" size={26} />
                <span>
                  Корзина <b>{totalCount || ""}</b>
                </span>
              </Link>
            </li>
            <li className={style.logOut__btn}>
              <button>
                <span>Выйти </span>
                <LogOut />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default MenuMobile;
