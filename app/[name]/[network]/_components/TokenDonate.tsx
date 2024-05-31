"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Code } from "@nextui-org/code";
import { Divider } from "@nextui-org/divider";
import copy from "copy-to-clipboard";
import { useState } from "react";

const CopyBtn = ({ walletAddress }: { walletAddress?: string }) => {
  const [copyText, setCopyText] = useState<string>("Copy");
  const handleCopy = () => {
    setCopyText("Copied");
    walletAddress && copy(walletAddress);
    setTimeout(() => {
      setCopyText("Copy");
    }, 1500);
  };
  return (
    <Button onClick={handleCopy} isIconOnly variant="faded" className="px-8">
      {copyText}
    </Button>
  );
};

type TokenDonateProps = {
  name: string;
  network: string;
  walletAddress?: string;
};

const TokenContribution = ({
  name,
  network,
  walletAddress,
}: TokenDonateProps) => {
  const TextComp = () => {
    return (
      <>
        <span>If you have additional </span>
        <span className="text-green-400">{name}</span>
        <span> on the </span>
        <span className="text-green-400">{network}</span>
        <span>,</span>
      </>
    );
  };
  const text1 = `If you have additional ${name} on the ${network},`;
  const text2 = `please donate them to us.`;
  const address = walletAddress || `0x358a73a163E9c9D130DDcbc97F0C0EF4Dd9a4f13`;
  return (
    <>
      <Card className="m-auto mt-48 w-[600px]">
        <CardHeader className="flex gap-3 justify-center">
          <div className="flex flex-col">
            <p className="text-md py-1 text-center textbl">{<TextComp />}</p>
            <p className="text-md py-1 text-center textbl">{text2}</p>
            {/* <p className="text-small text-default-500">nextui.org</p> */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex justify-center w-full items-center py-2">
            <Code className="w-full flex justify-between py-1 items-center text-xm">
              <span className="p-1">{address}</span>
              <CopyBtn walletAddress={walletAddress} />
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
