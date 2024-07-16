import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section>
          <div>{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
