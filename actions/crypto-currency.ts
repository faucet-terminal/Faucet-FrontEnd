"use server"

import * as z from "zod";
import { CryptoCurrencySchema } from "@/schemas";
import { createCryptoCurrency, findAllCryptoCurrency, findCryptoCurrency } from "@/data/crypto-currency";
import { auth } from "@/auth";

export const addCryptoCurrency = async (values: z.infer<typeof CryptoCurrencySchema>) => {
  // todo validate admin role
  // const session = await auth()
  const validatedFields = CryptoCurrencySchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
}
  const data = await createCryptoCurrency(values)
  if (!data) {
    return {error: 'create crypto currency error'}
  }
  return {
    data,
    success: 'create crypto currency success'
  }
}

export const getAllCryptoCurrency = async () => {
  const data = await findAllCryptoCurrency()
  if (!data) {
    return {error: 'get crypto currency list error'}
  }
  return {
    data
  }
}

export const getCryptoCurrency = async (
  { name, network }: { name: string; network: string; }
) => {
  const data = await findCryptoCurrency({ name, network })
  if (!data) {
    return {error: 'get crypto currency error'}
  }
  return {
    data
  }
}