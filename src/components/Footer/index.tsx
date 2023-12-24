import React from "react";
import style from "./_footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ShieldCheck } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className={style.root}>
      <div className="container">
        <div className={style.blocks}>
          <Link href="/">
            <div className={style.logo}>
              <Image src="/logo_footer.svg" alt="logo" width={60} height={60} />
              <div>
                <h2>Comrade</h2>
                <span>Лучшие продукты - здесь</span>
              </div>
            </div>
          </Link>

          <nav className={style.nav}>
            <ul>
              <li>Информация</li>
              <li>О магазине</li>
              <li>Бренды</li>
              <li>Доставка и оплата</li>
              <li>Контакты</li>
            </ul>
          </nav>
          <section className={style.contacts}>
            <a href="tel:83466628151">8 (3466) 62-81-51</a>

            <figure>
              <MapPin />
              <figcaption>
                Улица Ленина, 121, Орехово-Зуево, Московская область
              </figcaption>
            </figure>
            <figure className={style.private}>
              <ShieldCheck size={20} />
              <figcaption>Политика конфиденциальности</figcaption>
            </figure>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
