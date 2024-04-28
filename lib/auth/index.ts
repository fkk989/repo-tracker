import { prisma } from "@/client";
import { NextAuthOptions } from "next-auth";
import { GithubProfile } from "next-auth/providers/github";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    user: {
      userId: string;
      userAuthToken?: string;
      imageUrl?: string;
    };
  }
  interface User {
    login: string;
    avatar_url: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: string;
    userAuthToken?: string;
    imageUrl?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      // @ts-ignore
      async profile(profile: GithubProfile) {
        const userInDb = await prisma.user.findUnique({
          where: {
            githubUsername: profile.login,
          },
        });
        if (!userInDb) {
          console.log("no user found");
          await prisma.user.create({
            data: {
              name: profile.name || "",
              email: profile.email || "",
              githubUsername: profile.login,
              authType: "github",
            },
          });
        }

        return {
          ...profile,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.access_token && user) {
        token.userId = user.login;
        token.imageUrl = user.avatar_url;
        token.userAuthToken = account?.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.userAuthToken = token.userAuthToken;
      session.user.userId = token.userId;
      session.user.imageUrl = token.imageUrl;
      return session;
    },
  },
};
