import { Image } from "@nextui-org/image";
import { getCryptoCurrency } from "@/actions/crypto-currency";
import { FaucetPortKeys } from "@/config/faucetPont";

import FormFaucet from "./_components/FormFaucet";
import TokenDonate from "./_components/TokenDonate";

export default async function RequestPage({
  params: { name, network },
}: {
  params: {
    name: FaucetPortKeys;
    network: string;
  };
}) {
  const { data: cryptoCurrency, error } = await getCryptoCurrency({
    name,
    network,
  });

  if (error) return <div>{error}</div>;
  return (
    <>
      <div className="min-h-full w-full max-w-[768px] mx-auto">
        <div className="flex flex-col gap-1 align-center m-auto text-center">
          <Image
            alt={cryptoCurrency?.name}
            height={80}
            width={80}
            radius="full"
            src={cryptoCurrency?.logoUrl}
            classNames={{
              wrapper: "bg-white p-[1px] m-auto w-[80px] h-[80px]",
              img: "w-full h-full",
            }}
          />
          <p className="text-4xl font-bold">{cryptoCurrency?.name}</p>
          <p className="text-small text-default-500">
            {cryptoCurrency?.description}
          </p>
          <p className="text-small text-default-400">
            {cryptoCurrency?.network}
          </p>
        </div>
        <FormFaucet
          cryptoCurrency={cryptoCurrency!}
          name={name}
          network={network}
        />
        <TokenDonate
          name={name}
          network={network}
          walletAddress={`0xoew7i23l4lskjlruwoeur`}
        />
      </div>
    </>
  );
}
