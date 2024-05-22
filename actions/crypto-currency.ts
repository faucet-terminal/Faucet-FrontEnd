"use server"

import * as z from "zod";
import { CryptoCurrencySchema } from "@/schemas";
import { createCryptoCurrency } from "@/data/crypto-currency";

export const addCryptoCurrency = async (values: z.infer<typeof CryptoCurrencySchema>) => {
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