"use client";

import { useTransition } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { useSearchParams } from "next/navigation";
import { DEFAULT_LOGIN_REDIRECT } from "@/config/routes";
import { Button } from "@nextui-org/button";


export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [isGooglePending, startGoogleTransition] = useTransition()
  const [isTwitterPending, startTwitterTransition] = useTransition()

  const loginGoogle = (provider: "google") => {
    startGoogleTransition(async () => {
      await signIn(provider, {
        callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      });
    })
  }
  const loginTwitter = (provider: "twitter") => {
    startTwitterTransition(async () => {
      await signIn(provider, {
        callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      });
    })
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        className="w-full"
        variant="light"
        isLoading={isGooglePending}
        onClick={() => loginGoogle("google")}
      >
        <FcGoogle className="h-6 w-6" />
      </Button>
      <Button
        className="w-full"
        variant="light"
        isLoading={isTwitterPending}
        onClick={() => loginTwitter("twitter")}
      >
        <RiTwitterXLine className="h-6 w-6" />
      </Button>
    </div>
  );
};
