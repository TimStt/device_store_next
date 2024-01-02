import React, { Suspense } from "react";
import style from "./_profile.module.scss";
import ProfileInfo from "@/src/components/ProfileInfo";
// import ProfileChange from "@/src/components/ProfileChange";
import { UserType } from "@/types";
import { GetServerSideProps } from "next/types";
import Layout from "./Layout";
import { usePathname } from "next/navigation";
import Adress from "./admin";
import Image from "next/image";
import { getSession, signOut } from "next-auth/react";
import axios from "axios";
import Loading from "../loading";

const Profile: React.FC<{ user: UserType }> = ({ user }) => {
  //   const profile: User = {
  //     id: 1,
  //     email: "John@gmail.com",
  //   };
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
    // const id = 1;

    let user = session?.user;
    // const { data } = await axios(`https://fakestoreapi.com/users/${user?.id}`);

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
// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   try {
//     const session = await getSession({ req });
//     const res = await fetch(`https://fakestoreapi.com/users`, {
//       method: "POST",
//       body: JSON.stringify(session?.user),
//     });

//     return { props: { req } };
//   } catch (error) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }
// };
export default Profile;
