import { Card, CardFooter, CardHeader } from "@nextui-org/card";

import { Image } from "@nextui-org/image";
import Link from "next/link";
import { getAllCryptoCurrency } from "@/actions/crypto-currency";

export default async function Home() {
  const { data = [] } = await getAllCryptoCurrency();
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => {
        return (
          <Link key={item.id} href={`/${item.name}/${item.network}`}>
            <Card className="max-w-[400px]" isHoverable>
              <CardHeader className="flex gap-3 align-top">
                <Image
                  alt={item.id === "clywzp2em0001iz6dgkahnzc9" ? "MON": item.name}
                  height={40}
                  width={40}
                  radius="full"
                  src={item.logoUrl}
                />
                <div className="flex flex-col">
                  <p className="text-2xl font-bold">{item.id === "clywzp2em0001iz6dgkahnzc9" ? "MON": item.name}</p>
                  <p className="text-small text-default-500">
                    {item.description}
                  </p>
                  <p className="text-small text-default-400">{item.network}</p>
                </div>
              </CardHeader>
              <CardFooter>
                <p className="text-md font-bold">Request</p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </section>
  );
}
