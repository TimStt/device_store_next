import React from "react";

import Image from "next/image";
import style from "./empty-page.module.scss";

import Link from "next/link";
import { IEmptyPage } from "@/shared/types/ui";
import { paths } from "@/shared/config/paths";

const EmptyPage: React.FC<IEmptyPage> = ({
  title,
  description,
  image,
  backLink,
  textLink,
}) => {
  return (
    <div className="container">
      <section className={style.root}>
        <div className={style.blocks}>
          <div className={style.block}>
            <Image src={image} alt={title} width={400} height={400} />
          </div>
          <div className={style.block}>
            <h1>{title}</h1>
          </div>
          {description && <p>{description}</p>}
          <div className={style.block}>
            <Link className={style.btnBack} href={paths[backLink]}>
              {textLink || "Вернуться назад"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmptyPage;
