import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around border-3 p-4 bg-gray mx-50">
      <Link className="mr-10" href="/">
        Home
      </Link>
      <Link href="/models">Model</Link>
      <Link href={"/signup"}>Sign Up</Link>
      <Link href="/signup">Sign Up 2</Link>
      <Link href={"/signin"}>Sign In</Link>
    </div>
  );
};

export default Navbar;
