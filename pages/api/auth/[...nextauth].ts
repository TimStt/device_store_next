import NextAuth, {
  AuthOptions,
  DefaultSession,
  NextAuthOptions,
  Session,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hash } from "bcryptjs";
import apiInstance from "@/shared/config/apiinstance";
import { IUser, IUserFree } from "@/shared/types/auth";
import axios from "axios";
import { getUserByName } from "@/shared/api/get-user-by-name";
import { createItemOnDb } from "@/shared/api/create-item-on-db";
import { nanoid } from "@reduxjs/toolkit";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        try {
          const API_AURL = process.env.NEXT_PUBLIC_API_URL_USERS;
          const { data: users } = await axios.get<IUser[]>(`${API_AURL}/users`);

          //  проверяем, зарегистрирован ли пользователь
          const findUser = users.find(
            ({ username }) => username === credentials?.username
          );
          console.log("findUser", findUser);
          if (!findUser) return null;

          const validPassword = await compare(
            credentials?.password!,
            findUser.password
          );

          console.log(
            " credentials?.password",
            await hash(credentials?.password!, 12)
          );

          if (!validPassword) return null;
          // const { data: user } = await axios.get(`${urlApi}/users`, {
          //   headers: { Authorization: "Bearer " + token.token },
          // });

          // let { password, ...currentUser } = user;
          // const userRole = ["user", "admin"];

          return {
            id: findUser.id.toString(),
            name: findUser.username,
            email: findUser.email,
          };
        } catch (error) {
          console.error((error as Error).message);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    signIn: async ({ profile }) => {
      if (!profile) return true;
      try {
        const findUser = await getUserByName(profile?.name as string);

        if (findUser) return true;
        const { name, ...otherInfo } = profile;
        const newUser: IUserFree = {
          id: nanoid(3),
          username: profile?.name,
          email: profile?.email,
        };
        //ts-ignore-next-line
        const image =
          (otherInfo as { picture: string })?.picture ||
          (
            otherInfo as {
              avatar: string;
            }
          )?.avatar ||
          otherInfo?.image;

        if (image) newUser.image = image;
        await createItemOnDb("users", newUser);

        return true;
      } catch (error) {
        console.error((error as Error).message);
        return false;
      }
    },
    // jwt: async ({ token, user }: { token: any; user: any }) => {
    //   return {
    //     ...token,
    //     ...user,
    //   };
    // },
    // session: async (session: any) => {
    //   if (!session) return;
    //   const findUser = await getUserByName(session.user.name);
    //   if (!findUser) return session;
    //   return {
    //     user: {
    //       id: findUser.id,
    //       username: findUser.username,
    //       email: findUser.email,
    //       image: findUser.image,
    //       phone: findUser.phone,
    //     },
    //     ...session,
    //   };
    // },
  },
});
