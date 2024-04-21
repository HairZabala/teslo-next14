import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginDocument, LoginMutationResult } from "./graphql/generated";
import { apolloErrorToString } from "./utils/apolloErrors";

const protectedRoutes = ["/profile", "/checkout/address", "/checkout"];

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

    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);

      const isAuthRoute = nextUrl.pathname.includes("/auth");

      if (isProtectedRoute && !isLoggedIn) {
        return false;
      }

      if (isLoggedIn && isAuthRoute) {
        return Response.redirect(new URL("/", nextUrl));
      }

      return true;
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
          const resp = await fetch(process.env.APOLLO_ENDPOINT as string, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
            },
            body: JSON.stringify({
              operationName: "Login",
              variables: {
                loginInput: {
                  email: (credentials.email as string).toLowerCase(),
                  password: credentials.password,
                },
              },
              query: LoginDocument.loc?.source.body,
            }),
          });

          const { data } = await resp.json();

          if (data?.errors || !data) {
            // generate error message
            const errorMessage = data?.errors[0].message;
            // reject with error message
            throw new Error(errorMessage);
          }

          return {
            id: data.login.user.id,
            name: data.login.user.fullName,
            email: data.login.user.email,
            accessToken: data.login.token,
            roles: data.login.user.roles,
          };
        } catch (error) {
          throw new Error(apolloErrorToString(error as any));
        }
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
