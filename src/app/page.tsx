import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomeLayout;

const Hero = () => {
  return (
    <section className="font-semibold mt-24 flex flex-col justify-center items-center">
      <h1 className="sm:text-6xl text-4xl mb-8">Plan and Organize Events</h1>
      <p className="text-center text-xl text-gray-900">
        Turn ideas into action <br /> with Budget Man's AI-powered workspace.
      </p>
      <div className="flex gap-12 mt-8">
        <Button asChild>
          <Link href="/sign-in">Get Budget Man</Link>
        </Button>
        <Button variant="ghost">{"Get Budget Man ->"}</Button>
      </div>
    </section>
  );
};
