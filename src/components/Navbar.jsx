import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-3 p-4 bg-gray mx-50">
      <Link className="mr-10" href="/">
        Home
      </Link>
      <Link href="/models">Model</Link>
    </div>
  );
};

export default Navbar;
