import React, { Suspense } from "react";
import style from "./_profile.module.scss";
import ProfileInfo from "@/src/components/ProfileInfo";

import { UserType } from "@/types";
import { GetServerSideProps } from "next/types";
import Layout from "./Layout";

import { getSession, signOut } from "next-auth/react";

import Loading from "../../src/components/Loading";

const Profile: React.FC<{ user: UserType }> = ({ user }) => {
  console.log(user.id);
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <ProfileInfo user={user} />
        <button className={style.signOut} onClick={() => signOut()}>
          Выйти из аккаунта
        </button>
      </Layout>
    </Suspense>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const session = await getSession({ req });

    let user = session?.user;

    return { props: { user } };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default Profile;
