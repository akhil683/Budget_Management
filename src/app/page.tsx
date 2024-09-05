import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Meteors from "@/components/magicui/meteors";
import heroImg from "../../public/image_bg.jpeg";
import Image from "next/image";

const HomeLayout = () => {
  return (
    <div>
      <Meteor />
    </div>
  );
};

export default HomeLayout;

const Meteor = () => {
  return (
    <div className="relative flex w-full flex-col overflow-hidden">
      <Meteors number={20} />
      <Hero />
    </div>
  );
};
const Hero = async () => {
  return (
    <section className="font-semibold bg-black/70 flex flex-col justify-center items-center h-[calc(100vh-60px)]">
      <Image src={heroImg} alt="Hero Image" className="-z-10 absolute w-full h-full object-cover" />
      <h1 className="sm:text-6xl text-center text-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 py-2 mb-8">
        AI/ML based Price predictor for <br />Agri-Horticultural commodities
      </h1>
      <div className="flex md:gap-12 gap-4 my-8">
        <Button asChild className="py-6">
          <Link href="/dashboard" className="text-xl bg-red-600 hover:bg-red-800">
            <span className="">
              {"Explore ->"}
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
};
