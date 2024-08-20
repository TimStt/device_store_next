import React, { Suspense } from "react";
import style from "./profile.module.scss";

import { GetServerSideProps } from "next/types";
import LayoutProfile from "./ui/layout-profile";

import { getSession, signOut } from "next-auth/react";
import ProfileInfo from "./ui/profile-info";
import { IUser } from "@/shared/types/auth";

const Profile: React.FC = () => {
  return (
    <LayoutProfile>
      <ProfileInfo />
      <button className={style.root__signOut} onClick={() => signOut()}>
        Выйти из аккаунта
      </button>
    </LayoutProfile>
  );
};

export default Profile;
