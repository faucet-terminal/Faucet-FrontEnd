import Body from "@/components/body";
import { ModeToggle } from "@/components/theme/theme-toggler";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-24">
      <div className="flex flex-col items-center">
        <div>Faucet-ATM / Logo</div>
        <div className="fixed right-10 bottom-10">
          <ModeToggle />
        </div>
      </div>
      <Body/>
    </main>
  );
}
