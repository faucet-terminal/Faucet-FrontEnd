"use server"

import { FaucetPortKeys, faucetPort } from "@/config/faucetPont";
import { findCryptoCurrency } from "@/data/crypto-currency";
import axios from 'axios';


export const requestToken = async (
  { name, network, address }: { name: string; network: string; address: string }
) => {
  // todo catch error
  const cryptoCurrency = await findCryptoCurrency({ name, network })
  const lowerCaseName = name.toLowerCase() as FaucetPortKeys
  const port = faucetPort[lowerCaseName]
  const prefix = ['aptos',].includes(lowerCaseName) ? '/api' : '';
  const apiPath = `${prefix}/${lowerCaseName}/request`;

  // const fetchUrl = `http://127.0.0.1:${port}${apiPath}`
  const fetchUrl = `http://150.158.30.101:${port}${apiPath}`;
  try {
    const response = await axios.post(fetchUrl, {
      address,
      network,
      amount: cryptoCurrency?.claimAmount.toString(),
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data
  } catch (error: any) {
    // console.log("🚀 ~ err:", error.response.data);
    return { ...error?.response?.data };
  }




}