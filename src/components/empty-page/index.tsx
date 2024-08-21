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
        <div className={style.root__blocks}>
          <Image
            className={style.root__image}
            src={image}
            alt={title}
            width={400}
            height={400}
          />

          <h1>{title}</h1>

          {description && <p>{description}</p>}

          <Link className={style.root__btnBack} href={paths[backLink]}>
            {textLink || "Вернуться назад"}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EmptyPage;
