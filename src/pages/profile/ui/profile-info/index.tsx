import React from "react";
import style from "./profile-info.module.scss";
import { selectUser } from "@/redux/selectors/user";
import { useSelector } from "react-redux";
import Image from "next/image";
import { setDefaoultImage } from "@/shared/utils/set-default-image";
import { translate } from "@/shared/utils/translate";
import { translateWords } from "@/shared/config/translate";

const ProfileInfo: React.FC = () => {
  const user = useSelector(selectUser);
  const { image, id, ...userMain } = user;

  return (
    <div className={style.root}>
      <Image
        className={style.root__image}
        src={image || "/placeholder.jpg"}
        alt="user"
        width={100}
        height={100}
      />
      {Object.entries(userMain).map(([key, value], index) => (
        <div className={style.root__group_info} key={index}>
          <label
            className={style.root__group_info__label}
            htmlFor={key}
            key={index}
          >
            {translate("ru", key as keyof typeof translateWords.ru)}
          </label>
          <span className={style.text} id={key}>
            {value as string}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProfileInfo;
