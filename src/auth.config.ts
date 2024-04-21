import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginDocument, LoginMutationResult } from "./graphql/generated";
import { apolloClient } from "./utils/apolloServer";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signUp",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        token.data = user;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = token.data as any;
      return session;
    },
  },
  providers: [
    Credentials({
      name: "Credentials",
      id: "sign-in",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { password, email } = credentials;

        try {
          const { data } = (await apolloClient().mutate({
            mutation: LoginDocument,
            variables: {
              loginInput: {
                email,
                password,
              },
            },
          })) as LoginMutationResult;

          if (!data?.login.user) return null;

          return {
            id: data.login.user.id,
            name: data.login.user.fullName,
            email: data.login.user.email,
            accessToken: data.login.token,
            roles: data.login.user.roles,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
