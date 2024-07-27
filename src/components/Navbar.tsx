"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Switch } from "@radix-ui/react-switch";
import { Label } from "@radix-ui/react-label";

const Navbar = () => {
  const onModeChange = () => {};
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
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" onCheckedChange={onModeChange} />
          <Label htmlFor="airplane-mode">Mode</Label>
        </div>

        <Button asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
