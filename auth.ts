import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/types";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = await LoginSchema.parseAsync(credentials);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({ email, password }),
          }
        );
        const data = await response.json();

        if (data.statusCode === 200) {
          return data.data;
        }
        return data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.user = { ...user };
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = token.user;
      return session.user;
    },
  },
  session: {
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  secret: process.env.AUTH_SECRET as string,
});

