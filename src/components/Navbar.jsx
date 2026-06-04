"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  console.log(session);
  const user = session?.user;

  const handleSignOut = () => {
    authClient.signOut();
    console.log("sign out");
  };
  return (
    <div className="flex justify-around border-3 p-4 bg-gray mx-50">
      <Link className="mr-10" href="/">
        Home
      </Link>
      <Link href="/models">Model</Link>
      <Link href={"/signup"}>Sign Up</Link>
      <Link href={"/signin"}>Sign In</Link>
      <div>{user?.name}</div>
      <Button onClick={handleSignOut} variant="primary">
        Sign Out
      </Button>
    </div>
  );
};

export default Navbar;
