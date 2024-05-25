import { Button } from "@nextui-org/button";
import { addCryptoCurrency } from "@/actions/crypto-currency";
import { title } from "@/components/primitives";

export default function Home() {
  const handleAdd = async () => {
    "use server";
    const res = await addCryptoCurrency({
      name: "Fuel",
      description: "Aotos Devnet",
      currencyCode: "APT",
      logoUrl: "https://cdn.triangleplatform.com/img/aptos.png",
      network: "testnet",
      claimAmount: 1,
      claimFrequency: 24,
      balanceAlert: 10,
    });
    console.log("[ res ] >", res);
  };
  return (
    <section className="flex min-h-full flex-col items-center justify-between p-24">
      <div className={title({ color: "violet", size: "xl" })}>
        Hello Web3&nbsp;
      </div>
      <form action={handleAdd}>
        <Button type="submit">添加APTOs</Button>
      </form>
    </section>
  );
}
