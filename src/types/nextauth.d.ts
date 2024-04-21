import { DefaultSession } from "next-auth";

export declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      accessToken?: string;
      roles?: string[];
    } & DefaultSession["user"];
  }
}
