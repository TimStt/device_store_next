import { CircleUserRound, Menu, ShoppingBasket } from "lucide-react";

import Link from "next/link";
import style from "./menu-nav.module.scss";
import { useSelector } from "react-redux";
import Image from "next/image";
import ProfileItem from "../profile-item";
import { selectTotalCount } from "@/redux/selectors/basket";
import { paths } from "@/shared/config/paths";
import MobileMenuButton from "../mobile-menu-button";
import { selectUser } from "@/redux/selectors/user";
import { useSession } from "next-auth/react";

const MenuNav: React.FC = () => {
  const totalCount = useSelector(selectTotalCount);

  const { data: session } = useSession();
  const nameUser = session?.user?.name;
  const imageUser = session?.user?.image;

  return (
    <>
      <MobileMenuButton icon={<Menu />} text="Открыть навигацию по сайту" />
      <nav className={style.root}>
        <Link href={paths.basket}>
          <ShoppingBasket color="#9B9B9B" size={26} />
          <span>{totalCount ? <b>{totalCount}</b> : "Корзина"}</span>
        </Link>

        {session ? (
          imageUser ? (
            <ProfileItem
              text={nameUser?.split(" ")[0] || "Профиль"}
              href={paths.profile}
            >
              {" "}
              <Image
                className={style.root__image_user}
                src={imageUser}
                alt={nameUser || "user"}
                width={30}
                height={30}
              />
            </ProfileItem>
          ) : (
            <ProfileItem text="Профиль" href={paths.profile}>
              <CircleUserRound color="#9B9B9B" size={26} />
            </ProfileItem>
          )
        ) : (
          <ProfileItem text="Войти" href={paths.login} />
        )}
      </nav>
    </>
  );
};

export default MenuNav;
