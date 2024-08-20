import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import style from "./profile-item.module.scss";
import { IProfileItemProps } from "@/shared/types/ui";

const ProfileItem = ({ text, href, children }: IProfileItemProps) => {
  return (
    <Link className={style.root} href={href}>
      {children}
      <span>{text}</span>
    </Link>
  );
};

export default ProfileItem;
