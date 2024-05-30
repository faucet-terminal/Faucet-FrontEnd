"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Code } from "@nextui-org/code";
import { Divider } from "@nextui-org/divider";
import { FaucetPortKeys } from "@/config/faucetPont";
import { useState } from "react";
import copy from "copy-to-clipboard";

const CopyIcon = () => {
  const handleCopy = () => {
    copy("hello, workd");
  };
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="1em"
      className="cursor-pointer"
      onClick={handleCopy}
    >
      <path d="M16 17.1c0 3.5-1.4 4.9-4.9 4.9H6.9C3.4 22 2 20.6 2 17.1v-4.2C2 9.4 3.4 8 6.9 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"></path>
      <path d="M8 8V6.9C8 3.4 9.4 2 12.9 2h4.2C20.6 2 22 3.4 22 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9H16"></path>
      <path d="M16 12.9C16 9.4 14.6 8 11.1 8"></path>
    </svg>
  );
};

const TokenContribution = ({
  params: { name, network, walletAddress },
}: {
  params: {
    name: FaucetPortKeys;
    network: string;
    walletAddress?: string;
  };
}) => {
  const text1 = `If you have additional ${name} on the ${network},`;
  const text2 = `please donate them to us!`;
  const address = `0x358a73a163E9c9D130DDcbc97F0C0EF4Dd9a4f13`;
  return (
    <>
      <Card className="max-w-[680px]">
        <CardHeader className="flex gap-3 justify-center">
          <div className="flex flex-col">
            <p className="text-md py-1 text-center textbl">{text1}</p>
            <p className="text-md py-1 text-center textbl">{text2}</p>
            {/* <p className="text-small text-default-500">nextui.org</p> */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex justify-center w-full items-center py-2">
            <Code className="w-full flex justify-between py-1 items-center text-xm">
              <span className="p-1">{address}</span>
              <CopyIcon />
            </Code>
          </div>
          {/* <p>Make beautiful websites regardless of your design experience.</p> */}
        </CardBody>
        {/* <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/nextui-org/nextui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter> */}
      </Card>
    </>
  );
};

export default TokenContribution;
