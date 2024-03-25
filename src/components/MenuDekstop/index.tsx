import { selectBasket } from "@/src/redux/slice/basketSlice";
import { CircleUserRound, ShoppingBasket } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import style from "./_menuDekstop.module.scss";
import { useSelector } from "react-redux";

export const profileMenu = (href: string, value: string) => {
  return (
    <Link className={style.root} href={href}>
      <CircleUserRound color="#9B9B9B" size={26} />
      <span>{value}</span>
    </Link>
  );
};

const MenuDekstop: React.FC = () => {
  const { totalCount } = useSelector(selectBasket);
  const { data: session } = useSession();
  if (!session) return profileMenu("/login", "Войти");

  return (
    <nav className={style.root}>
      <Link href="/basket">
        <ShoppingBasket color="#9B9B9B" size={26} />
        <span>
          Корзина <b>{totalCount || ""}</b>
        </span>
      </Link>
      {profileMenu("/profile", "Профиль")}
    </nav>
  );
};

export default MenuDekstop;
