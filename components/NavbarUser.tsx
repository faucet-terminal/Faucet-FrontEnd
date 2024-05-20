"use client"
import Link from "next/link"
import { useCurrentUser } from "@/hooks/use-current-user"
import UserButton from "./auth/user-button"
import { NavbarItem } from "@nextui-org/navbar"
import { Button } from "@nextui-org/button";


const NavbarUser = () => {
  const user = useCurrentUser()
  if (user) {
    return <UserButton user={user}/>
  }
  return <>
    <NavbarItem className="hidden sm:flex gap-2">
      <Button
        as={Link}
        href="/auth/login"
        target="_self"
        className="text-sm font-normal text-default-600 bg-default-100"
      >
        Sign In
      </Button>
    </NavbarItem>
    <NavbarItem className="hidden sm:flex gap-2">
      <Button
        as={Link}
        target="_self"
        href="/auth/sign-up"
        className="bg-gradient-to-tr from-green-400 to-green-600 text-white shadow-lg"
      >
        Sign Up
      </Button>
    </NavbarItem>
  </>
}
export default NavbarUser
