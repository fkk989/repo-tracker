"use server";
import { prisma } from "@/client";

export interface User {
  name: string;
  email: string;
  githubUsername: string;
}
export async function createUser(userData: User) {
  try {
    await prisma.user.create({
      data: userData,
    });

    return {
      success: true,
      message: "user created successfully",
    };
  } catch (e: any) {
    return {
      success: false,
      message: e.message,
    };
  }
}
