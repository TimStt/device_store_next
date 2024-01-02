import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { UserType } from "@/types";
import { compare } from "bcryptjs";

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
          const urlApi = process.env.API_URL as string;

          const { data: users } = await axios.get(`${urlApi}/users`);

          //  проверяем, зарегистрирован ли пользователь
          const findUser = users.find(
            ({ username }: { username: string }) =>
              username === credentials?.username
          );
          if (!findUser) return null;

          const validPassword = compare(
            credentials?.password,
            findUser.password
          );

          if (!validPassword) return null;
          // const { data: user } = await axios.get(`${urlApi}/users`, {
          //   headers: { Authorization: "Bearer " + token.token },
          // });

          // let { password, ...currentUser } = user;
          // const userRole = ["user", "admin"];

          return {
            id: findUser.id,
            name: findUser.username,
            email: findUser.email,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user && user.accessToken) {
        token.accessToken = user.accessToken;
      }

      return token;
    },

    //     session({ session, user }) {
    //       if (session?.user && user.id) {
    //         session.user.id = user.id;
    // session.user.
    //         // session.user.accessToken = user.accessToken as string;
    //       }
    //       return session;
    //     },
  },
});
