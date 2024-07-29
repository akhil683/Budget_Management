// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aW50aW1hdGUtbW9ua2V5LTIwLmNsZXJrLmFjY291bnRzLmRldiQ
// CLERK_SECRET_KEY=sk_test_nmSfUdFnqpe9cBqTHFOfq6NnwdDc0UKAOWmacpiwes
//
// MONGODB_URI= "mongodb+srv://akhil_palsra:akhil610376598440@budgetdb.ohjb9fa.mongodb.net/"
// NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
// NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks, sidebarBudget } from "@/constants/sidebar";
import React from "react";
import { Button } from "./ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky border-r-gray-200 border-r left-0 top-0 flex h-screen w-fit flex-col py-6 px-4 text-gray-700 max-sm:hidden lg:w-[250px]">
      <div className="flex flex-col">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className="flex gap-4 items-center py-1 px-2 hover:bg-gray-100 rounded-lg justify-start"
            >
              {/* <Image */}
              {/*   src={link.imgUrl} */}
              {/*   alt={link.label} */}
              {/*   width={24} */}
              {/*   height={24} */}
              {/* /> */}
              <p className="font-medium max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="my-8">
        <p className=" text-sm font-semibold text-gray-600 mb-2">Budgets</p>
        {sidebarBudget.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          return (
            <Link
              href={`/dashboard/${link.route}`}
              key={link.label}
              className="flex gap-4 items-center py-1 px-2 hover:bg-gray-100 rounded-lg justify-start"
            >
              {/* <Image */}
              {/*   src={link.imgUrl} */}
              {/*   alt={link.label} */}
              {/*   width={24} */}
              {/*   height={24} */}
              {/* /> */}
              <p className="font-medium max-lg:text-sm">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <Button variant="outline">Add Budget +</Button>
    </section>
  );
};

export default Sidebar;
