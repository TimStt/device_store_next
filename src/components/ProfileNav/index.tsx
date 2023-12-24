"use client";

import { navItemsProfile } from "@/types";
import Link from "next/link";
import style from "./_ProfileNav.module.scss";
import { usePathname } from "next/navigation";
import React from "react";

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
    </nav>
  );
};

export default Navigation;
