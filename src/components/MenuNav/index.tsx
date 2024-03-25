import { selectBasket } from "@/src/redux/slice/basketSlice";
import { CircleUserRound, ShoppingBasket } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import style from "./_menuNav.module.scss";
import { useSelector } from "react-redux";
import MenuMobile from "../MobileMenu";
import ProfileItem from "../ProfileItem";

const MenuNav: React.FC = () => {
  const { totalCount } = useSelector(selectBasket);

  return (
    <>
      <nav className={style.root}>
        <Link href="/basket">
          <ShoppingBasket color="#9B9B9B" size={26} />
          <span>
            Корзина <b>{totalCount || ""}</b>
          </span>
        </Link>
        <ProfileItem text="Профиль" href="/profile" />
      </nav>
      <MenuMobile />
    </>
  );
};

export default MenuNav;
