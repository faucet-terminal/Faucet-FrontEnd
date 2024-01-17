'use client';
import { useEffect, useState } from "react";
import { AddressForm } from "../addressForm";
import { TokenCard } from "../tokenCard";

export default function Body() {
    const [Tokens, setTokens] = useState([]);
    const [isInValid, setIsInValid] = useState(false);
    const [isValidating, setIsValidating] = useState(false);

    useEffect(() => {
    }, []);

    return (
        <>
            <div className="flex items-center justify-center">
                    <AddressForm />
            </div>
            <div className="flex gap-[50px] flex-wrap justify-around">
                    {/* .map((item) =>  <TokenCard  /> ) */}
                    <TokenCard  />
            </div>
    </>
    )
}