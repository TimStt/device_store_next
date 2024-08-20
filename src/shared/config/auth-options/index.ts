import { AuthOptions, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import apiInstance from "@/shared/config/apiinstance";
import { IUser } from "@/shared/types/auth";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        try {
          const { data: users } = await apiInstance<IUser[]>(`/users`);

          //  проверяем, зарегистрирован ли пользователь
          const findUser = users.find(
            ({ username }) => username === credentials?.username
          );
          if (!findUser) return null;

          const validPassword = await compare(
            credentials?.password!,
            findUser.password
          );

          if (!validPassword) return null;
          // const { data: user } = await axios.get(`${urlApi}/users`, {
          //   headers: { Authorization: "Bearer " + token.token },
          // });

          // let { password, ...currentUser } = user;
          // const userRole = ["user", "admin"];

          return {
            id: findUser.id.toString(),
            username: findUser.username,
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
};
