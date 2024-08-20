import { CircleUserRound, ShoppingBasket } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import style from "./_menuDekstop.module.scss";
import { useSelector } from "react-redux";
import { selectTotalCount } from "@/redux/selectors/basket";

export const profileMenu = (href: string, value: string) => {
  return (
    <nav className={style.root}>
      <Link href={href}>
        <CircleUserRound color="#9B9B9B" size={26} />
        <span>{value}</span>
      </Link>
    </nav>
  );
};

const MenuDekstop: React.FC = () => {
  const totalCount = useSelector(selectTotalCount);
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
