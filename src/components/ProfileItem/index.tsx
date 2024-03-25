import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import style from "./_profile-item.module.scss";

interface ProfileItemProps {
  text: string;
  href: string;
}

const ProfileItem = ({ text, href }: ProfileItemProps) => {
  return (
    <Link className={style.root} href={href}>
      <CircleUserRound color="#9B9B9B" size={26} />
      <span>{text}</span>
    </Link>
  );
};

export default ProfileItem;
