"use client";

import { useState, useTransition } from "react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";

import { register } from "@/actions/register";
import { RegisterSchema } from "@/schemas";
import { Social } from "./social";
import { CheckIcon, EyeFilledIcon, EyeSlashFilledIcon, MailIcon, NotificationIcon, PasswordIcon } from "../icons";


export const SignUpForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const { control, handleSubmit } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      register(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="m-auto w-full max-w-[460px] p-3">
        <CardHeader className="flex flex-col items-start">
          <h1 className="text-4xl font-semibold">Sign Up</h1>
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
          <Controller
            name="confirm"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <Input
                  type={isVisible ? "text" : "password"}
                  label="Confirm Password"
                  placeholder="Confirm  your password"
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
          <div className="flex justify-center min-h-[30px]">
            {
              error &&
              <Chip
                startContent={<NotificationIcon size={20} />}
                variant="flat"
                color="danger"
                classNames={{
                  base: "p-6 rounded-md",
                }}
              >
                {error}
              </Chip>
            }
            {
              success &&
              <Chip
                startContent={<CheckIcon size={26} />}
                variant="flat"
                color="success"
                classNames={{
                  base: "rounded-md h-auto p-2",
                }}
              >
                {success}
                  <div className="whitespace-pre-wrap">
                    Click the confirmation link in the email to complete the registration.
                  </div>
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
            Sign Up
          </Button>
          <p className="flex gap-2 justify-center">
            <span>Have an account?</span>
            <Link href="/auth/login" className="font-bold">Sign in</Link>
          </p>
        </CardBody>
        <Divider className="my-4" />
        <Social />
      </Card>
    </form>
  );
};
