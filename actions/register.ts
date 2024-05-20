"use server";

import * as z from "zod";
// import bcrypt from "bcryptjs";

import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
// import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  // todo 等邮箱服务
  // const { email, password } = validatedFields.data;
  // const hashedPassword = await bcrypt.hash(password, 10);

  // const existingUser = await getUserByEmail(email);

  // if (existingUser) {
  //   return { error: "Email already in use!" };
  // }

  // await db.user.create({
  //   data: {
  //     email,
  //     password: hashedPassword,
  //   },
  // });

  // const verificationToken = await generateVerificationToken(email);
  // const sendRes = await sendVerificationEmail(
  //   verificationToken.email,
  //   verificationToken.token,
  // );

  // if (sendRes?.error) {
  //   return { error: sendRes.error }
  // }
  return { success: "Confirmation email sent!" };
};
