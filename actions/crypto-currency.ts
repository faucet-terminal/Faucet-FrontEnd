"use server"

import * as z from "zod";

import { createCryptoCurrency, deleteCryptoCurrency, findAllCryptoCurrency, findCryptoCurrency, getCryptoCurrencyById, getCryptoPage, updateCurrency } from "@/data/crypto-currency";

import { CryptoCurrencySchema } from "@/schemas";

export const addCryptoCurrency = async (values: z.infer<typeof CryptoCurrencySchema>) => {
  // todo validate admin role
  // const session = await auth()
  const validatedFields = CryptoCurrencySchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const data = await createCryptoCurrency(values)
  if (!data) {
    return { error: 'create crypto currency error' }
  }
  return {
    success: 'create crypto currency success'
  }
}

export const updateCryptoCurrency = async (values: z.infer<typeof CryptoCurrencySchema>, id: string) => {
  const validatedFields = CryptoCurrencySchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const data = await updateCurrency(values, id)
  if (!data) {
    return { error: 'update crypto currency error' }
  }
  return {
    success: 'update crypto currency success'
  }

}

/**
 * 分页列表
 * @param params 
 * @returns 
 */
export const getCryptoCurrencyPage = async (params: { size?: number, current?: number }) => {
  const data = await getCryptoPage(params)
  if (!data) {
    return { error: 'get crypto currency page error' }
  }
  return {
    data,
    success: 'get crypto currency  page success'
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

/**
 * 根据ID查询记录
 * @param id 
 * @returns 
 */
export const deleteCryptoById = async (id: string) => {
  const data = await deleteCryptoCurrency(id)
  if (!data) {
    return { error: 'delete crypto currency error' }
  }
  return {
    success: 'delete crypto currency success'
  }
}
export const getAllCryptoCurrency = async () => {
  const data = await findAllCryptoCurrency()
  if (!data) {
    return { error: 'get crypto currency list error' }
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
    return { error: 'get crypto currency error' }
  }
  return {
    data
  }
}
