import * as z from "zod";
import { CryptoCurrencySchema } from "@/schemas";
import { db } from "@/lib/db";
import { capitalizeFirstLetter } from "@/lib/utils";

export const createCryptoCurrency = async (values: z.infer<typeof CryptoCurrencySchema>) => {
  try {
    const res = await db.cryptoCurrency.create({ data: values });
    return res
  } catch (error) {
    return null
  }
}

export const findAllCryptoCurrency = async () => {
  try {
    const res = await db.cryptoCurrency.findMany();
    return res
  } catch (error) {
    return null
  }
}

export const findCryptoCurrency = async (
  { name, network }: { name: string; network: string; }
) => {
  try {
    const res = await db.cryptoCurrency.findUnique({
      where: {
        name_network: {
          name: capitalizeFirstLetter(name),
          network
        }
      }
    });
    return res
  } catch (error) {
    return null
  }
}