import React, { ReactNode } from "react";
import Commodities from "@/constants/commodities";
import Link from "next/link";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <section className="w-[220px] mt-6 flex justify-center pl-6 flex-col gap-2">
        {Commodities.map(data => (
          <Link key="data" href={`/dashboard/${data}`} className="px-4 text-xl py-2 rounded-xl hover:bg-gray-100 text-gray-800 hover:text-black w-full">
            {data}
          </Link>
        ))}
      </section>
      {children}
    </main >
  );
};

export default HomeLayout;
