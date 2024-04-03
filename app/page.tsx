import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center justify-between p-24">
      <div className={title({ color: "violet", size: "xl" })}>
        Hello Web3&nbsp;
      </div>
    </main>
  )
}
