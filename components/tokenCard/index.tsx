'use client'

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VerifiedLogo } from "./logo";
import { useState } from "react";

type Props = {
  tokenValue ?: string;
  tokenlabel ?: string;
  officedSupport ?: string;
  avatarUrl ?: string;
  alt ?: string;
  tokenName ?: string;
  primaryColor ?: string;
  secondaryColor ?: string;
  handleRequest ?: () => void;
};

export function TokenCard({tokenValue, tokenlabel, officedSupport, avatarUrl,alt,tokenName, primaryColor, secondaryColor, handleRequest} : Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    borderColor: isHovered ? "#2980b9" : "",  // primaryColor 
  };

  return (
    <div
      className="border rounded-xl flex flex-col w-[235px] h-[165px] justify-between p-2 transition-all"
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src="" alt="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>Token Name </div>
        </div>
        <div>
          <VerifiedLogo />
        </div>
      </div>
      <div>on Ethereum Sepolia</div>
      <div className="flex gap-2 items-center">
        <p>current : </p>
        <p className="text-2xl"> 6.00</p>
        <p>ETh</p>
      </div>
      <Button className="w-full rounded-full" variant="outline" style={cardStyle} onClick={handleRequest}>
        Request
      </Button>
    </div>
  );
}
