import React from "react";

import style from "./layout-profile.module.scss";
import cls from "classnames";
import Navigation from "../profile-nav";
import { navItems } from "./nav-items.data";

const LayoutProfile: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className={cls(style.root, "container")}>
      <h1 className={style.root__title}>Мой профиль</h1>
      <Navigation navLinks={navItems} />
      {children}
    </section>
  );
};

export default LayoutProfile;
