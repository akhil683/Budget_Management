import Sidebar from "@/components/Sidebar";
import React, { ReactNode, Suspense } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <Sidebar />
      <section>
        <Suspense fallback={<h1 className="text-6xl">Loading...</h1>}>
          <div>{children}</div>
        </Suspense>
      </section>
    </main>
  );
};

export default HomeLayout;
