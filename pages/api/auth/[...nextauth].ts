import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

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

          const { data: token } = await axios.post(`${urlApi}/auth/login`, {
            username: credentials?.username,
            password: credentials?.password,
          });

          //  проверяем, зарегистрирован ли пользователь
          // const findUser = users.find(
          //   (user) => user.email === credentials?.email
          // );
          if (!token) return null;

          // const { data: user } = await axios.get(`${urlApi}/users`, {
          //   headers: { Authorization: "Bearer " + token.token },
          // });
          const { data: users } = await axios.get<any[]>(`${urlApi}/users`);
          let user = users.find(
            ({ username }) => username === credentials?.username
          );

          if (!user) return null;

          // let { password, ...currentUser } = user;
          // const userRole = ["user", "admin"];

          return {
            id: user.id,
            name: user.username,
            email: user.email,
            accessToken: token.token,
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
