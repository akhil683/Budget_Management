import React from "react";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle, SheetContent } from "./ui/sheet";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Switch } from "./ui/switch";
import Link from "next/link";
import { useTheme } from "next-themes";

const MobileNav = () => {
  const { theme, setTheme } = useTheme();
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-3xl">Budget-Man</SheetTitle>
      </SheetHeader>
      <hr className="my-4" />
      <div className="flex gap-6 mt-8 font-medium">
        <ul className="flex flex-col gap-4">
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
      <hr className="my-4" />
      <div className="flex flex-col gap-6 max-w-32">
        <Switch
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Button asChild variant="default">
          <Link href="/sign-in">Sign In</Link>
        </Button>
      </div>
    </SheetContent>
  );
};

export default MobileNav;
