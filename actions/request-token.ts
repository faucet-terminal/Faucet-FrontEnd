"use server"

import { FaucetPortKeys, faucetPort } from "@/config/faucetPont";
import { findCryptoCurrency } from "@/data/crypto-currency";

export const requestToken = async (
  { name, network, address }: { name: string; network: string; address:string }
) => {
  // todo catch error
  const cryptoCurrency = await findCryptoCurrency({ name, network })
  const lowerCaseName = name.toLowerCase() as FaucetPortKeys
  const port = faucetPort[lowerCaseName]
  const prefix = ['aptos', 'near'].includes(lowerCaseName) ? '/api' : '';
  const apiPath = `${prefix}/${lowerCaseName}/request`;

  const fetchUrl = `http://127.0.0.1:${port}${apiPath}`
  const res = await fetch(fetchUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      address,
      network,
      amount: cryptoCurrency?.claimAmount
    }),
    next: {
      // no cache
      revalidate: 0
    }
  }).then((res) => res.json())
  return res
}