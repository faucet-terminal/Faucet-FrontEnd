"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { newVerification } from "@/actions/new-verification";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { NotificationIcon } from "../icons";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";

export const NewVerificationForm = () => {
  const ran = useRef(false)
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const imgSrc = success ? "/images/success.png" : "/images/waiting.png"
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing token!");
      return;
    }
    startTransition(() => {
      (async () => {
        await new Promise((resolve) => setTimeout(() => {
          resolve(true)
        }, 1000))
        newVerification(token)
          .then(async (data) => {
            setSuccess(data.success);
            setError(data.error);
            // TODO 验证完登录
          })
          .catch(() => {
            setError("Something went wrong!");
          })
      })()
    })

  }, [token, success, error]);

  useEffect(() => {
    if (ran.current) {
      onSubmit();
    }
    return () => {
      ran.current = true
    }
  }, [onSubmit]);

  return (
    <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
      <Card
        className="w-full max-w-md border-none py-4"
        radius="lg"
        shadow="none"
      >
        <CardHeader className="justify-center">
          <h1 className="font-bold text-5xl">Verify Email</h1>
        </CardHeader>
        <CardBody className="flex items-center w-full justify-center">
          {
            isPending && <Spinner color="default" />
          }
        </CardBody>
        <CardFooter className="justify-center flex-col gap-2">
          {!success && !isPending && error && (
            <Chip
              startContent={<NotificationIcon size={20} />}
              variant="bordered"
              color="danger"
              classNames={{
                base: "p-6 rounded-md m-auto",
              }}
            >
              {error}
            </Chip>
          )}
          <h2 className="flex flex-col items-center gap-2 text-3xl font-bold text-green-500 mb-1">
            {success}
            {
              success && <Button
                as={Link}
                href="/auth/login"
                variant="shadow"
                color="success"
              >
                Back to Login
              </Button>
            }
          </h2>
        </CardFooter>
      </Card>
    </div>
  )
}