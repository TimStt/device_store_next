import React from "react";
import style from "./_profile.module.scss";
import Link from "next/link";
import Navigation from "@/src/components/ProfileNav";
import { signOut } from "next-auth/react";
import { Home } from "lucide-react";

const navItems = [
  { name: "Мои данные", href: "/profile" },
  { name: "Панель админа", href: "/profile/admin" },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const clickHandlerSignOut = async () => {
    await signOut();
  };
  return (
    <section className={style.root}>
      <div className="container">
        <h1>Профиль</h1>
        <Navigation navLinks={navItems} />

        {children}
      </div>
    </section>
  );
};

export default Layout;
