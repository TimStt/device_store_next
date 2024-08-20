import Link from "next/link";
import style from "./profile-nav.module.scss";
import { usePathname } from "next/navigation";
import React from "react";
import { Home } from "lucide-react";
import { navItemsProfile } from "@/shared/types/products";
import cls from "classnames";

const Navigation: React.FC<{ navLinks: navItemsProfile[] }> = ({
  navLinks,
}) => {
  const pathName = usePathname();
  return (
    <nav className={style.root}>
      {navLinks.map(({ name, href }) => (
        <Link
          key={href}
          href={href}
          className={cls(style.root__link, {
            [style["root__link--active"]]: pathName === href,
          })}
        >
          {name}
        </Link>
      ))}
      <Link
        className={cls(style.root__link, style["root__link--home"])}
        href={`/`}
      >
        <Home size={20} />
      </Link>
    </nav>
  );
};

export default Navigation;
