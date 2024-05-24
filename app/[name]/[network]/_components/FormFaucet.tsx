"use client"

import { useState, useTransition } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import { CryptoCurrency } from "@prisma/client";
import { requestToken } from "@/actions/request-token";
import { CheckIcon } from "@/components/icons";

type FormFaucetProps = {
  cryptoCurrency: CryptoCurrency;
  name: string;
  network: string;
}

type Transaction = {
  tx_id: string;
  success: boolean;
  explorer_url: string;
}

const FormFaucet: React.FC<FormFaucetProps> = ({ cryptoCurrency, name, network }) => {
  const [address, setAddress] = useState('');
  const [isPending, startTransition] = useTransition()
  const [transaction, setTransaction] = useState<Transaction>();

  const handleAction = () => startTransition(async () => {
    const res = await requestToken({ name, network, address })
    setTransaction(res)
  })

  return (
    <>
      <form
        className="grid gap-4 mt-4"
        action={handleAction}
      >
        <Input
          value={address}
          variant="bordered"
          placeholder="Wallet Address"
          onValueChange={setAddress}
        />
        <div className="m-w-full flex justify-center">
          <Button
            variant="shadow"
            color="success"
            type="submit"
            isLoading={isPending}
          >
            Request {
              // cryptoCurrency.claimAmount
              0.001
            } {cryptoCurrency.currencyCode}
          </Button>
        </div>
      </form>
      <div className="flex justify-center my-4">
        {
          transaction?.success &&
          <Chip
            startContent={<CheckIcon size={30} />}
            variant="flat"
            color="success"
            classNames={{
              base: "rounded-md h-auto p-2 m-auto w-full",
            }}
          >
            <p className="text-lg font-bold">
              Success!
            </p>
            <div className="flex flex-col gap-2">
              <p className="max-w-[50vw] break-words">
                Tx: {transaction?.tx_id}
              </p>
              <Button
                href={transaction?.explorer_url}
                as={Link}
                target="_blank"
                isExternal
                showAnchorIcon
                variant="flat"
                className="flex-none"
              >
                Explorer Url
              </Button>
            </div>
          </Chip>
        }
      </div>
    </>
  )
}

export default FormFaucet