"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/sidebar";
import React from "react";

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
              <p className="font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
      <div className="mt-8">
        <p className=" text-sm font-semibold text-gray-600 mb-2">Budgets</p>
        {sidebarLinks.map((link) => {
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
              <p className="font-semibold max-lg:text-sm">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
