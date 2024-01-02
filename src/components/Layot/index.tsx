import React from "react";
import style from "./_layot.module.scss";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
