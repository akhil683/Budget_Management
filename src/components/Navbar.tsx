"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {

  return (
    <nav className="fixed bg-red-600 top-0 w-full bg-opacity-95 text-white z-20 flex justify-around h-[60px] items-center">
      <Link href={"/"}>
        <span className="text-2xl font-semibold">Commodity Forecast
        </span>
      </Link>
      <div className="flex gap-6 font-medium max-md:hidden">
        <ul className="flex gap-6">
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={""}>Resources</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/pricing"}>About Us</Link>
          </li>
        </ul>
      </div>
      {/* <div className="flex gap-6 items-center max-md:hidden"> */}
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
