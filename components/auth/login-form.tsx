"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";

import { login } from "@/actions/login";
import { LoginSchema } from "@/schemas";
import { Social } from "./social";
import { EyeFilledIcon, EyeSlashFilledIcon, MailIcon, NotificationIcon, PasswordIcon } from "../icons";


export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const { control, handleSubmit } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")
    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="m-auto w-full max-w-[460px] p-3">
        <CardHeader className="flex flex-col items-start">
          <h1 className="text-4xl font-semibold">Log In</h1>
          <p className="my-1 text-sm text-gray-400">Log in with your account</p>
        </CardHeader>
        <CardBody className="flex flex-col justify-start  gap-6">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Input
                  type="email"
                  label="Email"
                  placeholder="xxxx@example.com"
                  errorMessage={fieldState.error?.message}
                  color={fieldState.invalid ? "danger" : "default"}
                  isInvalid={fieldState.invalid}
                  isClearable
                  labelPlacement="outside"
                  startContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  {...field}
                />
              )
            }}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Input
                  type={isVisible ? "text" : "password"}
                  label="Password"
                  placeholder="Enter your password"
                  errorMessage={fieldState.error?.message}
                  color={fieldState.invalid ? "danger" : "default"}
                  isInvalid={fieldState.invalid}
                  labelPlacement="outside"
                  startContent={
                    <PasswordIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  {...field}
                />
              )
            }}
          />
          {/* <Link href="/auth/sign-up">Forgot password?</Link> */}
          <div className="flex justify-center min-h-[30px]">
            {
              error &&
              <Chip
                startContent={<NotificationIcon size={18} />}
                variant="flat"
                color="danger"
                classNames={{
                  base: "rounded-md p-2 whitespace-pre-wrap h-auto",
                }}
              >
                {error}
              </Chip>
            }
          </div>
          <Button
            fullWidth
            type="submit"
            variant="ghost"
            color="default"
            isLoading={isPending}
          >
            Log In
          </Button>
          <p className="flex gap-2 justify-center">
            <span>Don&apos;t have an account?</span>
            <Link href="/auth/sign-up" className="font-bold">Sign up</Link>
          </p>
        </CardBody>
        <Divider className="my-4" />
        <Social />
      </Card>
    </form>
  );
};
