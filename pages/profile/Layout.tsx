import React from "react";
import style from "./_profile.module.scss";
import Navigation from "@/src/components/ProfileNav";
import { signOut } from "next-auth/react";

const navItems = [
  { name: "Мои данные", href: "/profile" },
  { name: "Панель админа", href: "/profile/admin" },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const clickHandlerSignOut = async () => {
    await signOut();
  };
  return (
    <div className="container">
      <section className={style.root}>
        <h1>Профиль</h1>
        <Navigation navLinks={navItems} />

        {children}
      </section>
    </div>
  );
};

export default Layout;
