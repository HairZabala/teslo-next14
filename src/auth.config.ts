import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { apolloClient } from "./utils/apolloClient";
import { LoginDocument, LoginMutationResult } from "./graphql/generated";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/signUp",
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
            email: data.login.user.email,
            name: data.login.user.fullName,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
};

export const { signIn, signOut, auth } = NextAuth(authConfig);
