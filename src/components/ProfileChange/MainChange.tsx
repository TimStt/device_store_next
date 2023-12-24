import React, { useState } from "react";
import style from "./_ProfileInfo.module.scss";
import { UserType } from "@/types";

const ProfileInfoChange: React.FC<{ user: UserType }> = ({ user }) => {
  const [valueInput, setValueInput] = useState<string>();
  // const { email, username } = user; ;
  return (
    <>
      {Object.keys(user).map((key: string) => (
        <div key={key} className={style.info}>
          <label htmlFor={key}></label>
          <input
            value={valueInput}
            id={key}
            onInput={(e) => setValueInput((e.target as HTMLInputElement).value)}
          ></input>
        </div>
      ))}
    </>
  );
};

export default ProfileInfoChange;
