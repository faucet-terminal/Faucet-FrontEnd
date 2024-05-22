import * as z from "zod";
import { CryptoCurrencySchema } from "@/schemas";
import { db } from "@/lib/db";

export const createCryptoCurrency = async(values: z.infer<typeof CryptoCurrencySchema>) => {
  try {
    const res = await db.cryptoCurrency.create({ data: values });
    return res
  } catch (error) {
    return null
  }
}