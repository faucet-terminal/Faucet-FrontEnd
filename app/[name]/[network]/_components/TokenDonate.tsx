"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Code } from "@nextui-org/code";
import { Divider } from "@nextui-org/divider";
import copy from "copy-to-clipboard";
import { useState } from "react";
import { CryptoCurrency } from "@prisma/client";

const CopyBtn = ({ donationAddress }: { donationAddress: string }) => {
  const [copyText, setCopyText] = useState<string>("Copy");
  const handleCopy = () => {
    setCopyText("Copied");
    donationAddress && copy(donationAddress);
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
  currencyCode: string;
  network: string;
  donationAddress: string;
};

const TokenContribution = ({
  currencyCode,
  network,
  donationAddress,
}: TokenDonateProps) => {
  const TextComp = () => {
    return (
      <>
        <span>If you have additional </span>
        <span className="text-green-400">{currencyCode}</span>
        <span> on the </span>
        <span className="text-green-400">{network}</span>
        <span>,</span>
      </>
    );
  };
  const textRest = `please donate them to us.`;

  return (
    <>
      <Card className="m-auto mt-48">
        <CardHeader className="flex gap-3 justify-center">
          <div className="flex flex-col">
            <p className="text-md py-1 text-center textbl">{<TextComp />}</p>
            <p className="text-md py-1 text-center textbl">{textRest}</p>
            {/* <p className="text-small text-default-500">nextui.org</p> */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="flex justify-center w-full items-center py-2">
            <Code className="w-full flex justify-between py-1 items-center text-xm">
              <span className="p-1">{donationAddress}</span>
              <CopyBtn donationAddress={donationAddress} />
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
