import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <Sidebar />
      <section>
        <div>{children}</div>
      </section>
    </main>
  );
};

export default HomeLayout;
