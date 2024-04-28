import { prisma } from "@/client";
import { User } from "@prisma/client";

export async function createUser({
  name,
  email,
  githubUsername,
  authType,
}: Partial<User>) {
  try {
    const userInDb = await prisma.user.findUnique({
      where: {
        githubUsername,
      },
    });

    if (!userInDb) {
      await prisma.user.create({
        data: {
          name: name!,
          email: email!,
          githubUsername: githubUsername!,
          authType: authType!,
        },
      });

      return {
        success: true,
        message: "user created successfully",
      };
    } else {
    }
  } catch (e: any) {
    return {
      success: false,
      message: e.message,
    };
  }
}
