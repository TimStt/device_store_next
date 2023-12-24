import React from "react";
import style from "./_ProfileInfo.module.scss";
import { UserType } from "@/types";

const ProfileInfo: React.FC<{ user: UserType }> = ({ user }) => {
  const { image, ...userMain } = user;
  // mainInfo = {
  //   ...name,
  //   ...mainInfo,
  // };
  const infoNames: string[] = ["Имя", "Электронная почта"];
  return (
    <div className={style.root}>
      {Object.entries(userMain).map(([key, value], index) => (
        <div className={style.groupInfo} key={index}>
          <label className={style.label} htmlFor={key} key={index}>
            {infoNames[index]}
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
