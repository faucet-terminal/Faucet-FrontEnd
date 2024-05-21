import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { db } from "@/lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking:true,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // todo Credentials
  ],
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
});
