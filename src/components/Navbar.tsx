"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between mx-4 h-[60px] items-center">
      <div className="flex gap-6 font-medium">
        <Link href={"/"}>
          {/* <Image src={""} placeholder="Logo" /> */}
          <span>Budget Man</span>
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/attendance"}>Attendance</Link>
          </li>
          <li>
            <Link href={""}>Resources</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <Switch
          // id="airplane-mode"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />

        <SignedIn>
          <UserButton />
        </SignedIn>
        <Button asChild variant="default">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
