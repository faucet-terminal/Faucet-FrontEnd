import * as z from "zod";

import { CryptoCurrencySchema } from "@/schemas";
import { db } from "@/lib/db";

export const createCryptoCurrency = async (values: z.infer<typeof CryptoCurrencySchema>, id?: string) => {
  try {
    if (id) {
      return await db.cryptoCurrency.update({
        where: {
          id,
        },
        data: values,
      });
    }
    const res = await db.cryptoCurrency.create({ data: values });
    return res
  } catch (error) {
    return null;
  }
}


// 通过 ID 查询记录
export const getCryptoCurrencyById = async (id: string) => {
  try {
    const data = await db.cryptoCurrency.findUnique({
      where: {
        id
      },
    });
    return data;
  } catch (error) {
    console.error('Error getting cryptoCurrency by ID:', error);
    return null
  }
};

export const getCryptoPage = async ({ size = 10, current = 1 }: {
  size?: number;
  current?: number;
}) => {
  try {
    const skip = (current - 1) * size;
    const cryptos = await db.cryptoCurrency.findMany({
      skip: skip,
      take: size,
    });

    const total = await db.cryptoCurrency.count();
    const totalPages = Math.ceil(total / size);
    return {
      current: current,
      size: size,
      records: cryptos,
      pages: totalPages,
      total: total,
    };
  } catch (error) {
    console.error('Error getting page cryptoCurrency :', error);
    return null
  }
};

// 删除记录
export const deleteCryptoCurrency = async (id: string) => {
  try {
    await db.cryptoCurrency.delete({
      where: {
        id,
      },
    });
    return true;
  } catch (error) {
    console.error('Error deleting cryptoCurrency:', error);
    return null
  }
};