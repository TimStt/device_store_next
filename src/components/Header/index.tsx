import React from "react";
import style from "./_header.module.scss";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className={style.root}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.logo}>
            <Image src="/logo.svg" alt="sdsds" width={60} height={60} />
            <div>
              <h2>Comrade</h2>
              <span>The best products are here</span>
            </div>
          </div>

          <nav>
            <CircleUserRound color="#9B9B9B" size={28} />
            <span>Админ</span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
