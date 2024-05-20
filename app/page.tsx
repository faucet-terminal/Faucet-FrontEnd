"use client"
import { signIn } from "@/auth";
import { Social } from "@/components/auth/social";
import { title } from "@/components/primitives";

export default function Home() {
  const login = async () => {
    await signIn('twitter')
  }
  return (
    <section className="flex min-h-full flex-col items-center justify-between p-24">
      <div className={title({ color: "violet", size: "xl" })}>
        Hello Web3&nbsp;
      </div>
    </section>
  )
}
