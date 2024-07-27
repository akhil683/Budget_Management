import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between mx-4 h-[60px] items-center">
      <div className="flex gap-6 font-semibold">
        <Link href={"/"}>
          {/* <Image src={""} placeholder="Logo" /> */}
          <span>Budget Man</span>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={""}>Solutions</Link>
          </li>
          <li>
            <Link href={""}>Resources</Link>
          </li>
          <li>
            <Link href={""}>Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <Link href={""} className="font-semibold">
          Request a Demo
        </Link>
        <Button asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
