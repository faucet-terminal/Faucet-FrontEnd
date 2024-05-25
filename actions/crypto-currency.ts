"use server"

import * as z from "zod";

import { createCryptoCurrency, getCryptoCurrencyById, getCryptoPage } from "@/data/crypto-currency";

import { CryptoCurrencySchema } from "@/schemas";

export const addCryptoCurrency = async (values: z.infer<typeof CryptoCurrencySchema>, id?: string) => {
  const validatedFields = CryptoCurrencySchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const data = await createCryptoCurrency(values, id)
  if (!data) {
    return { error: 'create crypto currency error' }
  }
  return {
    success: 'create crypto currency success'
  }
}

/**
 * 分页列表
 * @param params 
 * @returns 
 */
export const getCryptoCurrency = async (params: { size?: number, current?: number }) => {
  const data = await getCryptoPage(params)
  if (!data) {
    return { error: 'get crypto currency error' }
  }
  return {
    data,
    success: 'get crypto currency success'
  }
}

/**
 * 详情
 * @param id 
 * @returns 
 */
export const getCryptoById = async (id: string) => {
  const data = await getCryptoCurrencyById(id)
  if (!data) {
    return { error: 'get crypto currency error' }
  }
  return {
    data,
    success: 'get crypto currency success'
  }
}


export const deleteCryptoById = async (id: string) => {
  const data = await getCryptoCurrencyById(id)
  if (!data) {
    return { error: 'delete crypto currency error' }
  }
  return {
    success: 'delete crypto currency success'
  }
}
