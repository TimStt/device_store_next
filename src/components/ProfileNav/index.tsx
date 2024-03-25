import { navItemsProfile } from "@/types";
import Link from "next/link";
import style from "./_profileNav.module.scss";
import { usePathname } from "next/navigation";
import React from "react";
import { Home } from "lucide-react";

const Navigation: React.FC<{ navLinks: navItemsProfile[] }> = ({
  navLinks,
}) => {
  const pathName = usePathname();
  return (
    <nav className={style.nav}>
      {navLinks.map(({ name, href }) => (
        <Link
          key={href}
          href={href}
          className={`${style.btn} ${
            pathName === href ? style["btn--active"] : ""
          }`}
        >
          {name}
        </Link>
      ))}
      <Link className={`${style.btn} ${style["btn--home"]}`} href={`/`}>
        <Home size={20} />
      </Link>
    </nav>
  );
};

export default Navigation;
