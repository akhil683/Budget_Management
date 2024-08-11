import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Meteors from "@/components/magicui/meteors";
import heroImg from "../../public/hero_img.png";
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
      <Meteors number={10} />
      <Hero />
    </div>
  );
};
const Hero = async () => {
  return (
    <section className="font-semibold my-24 mx-4 flex flex-col justify-center items-center">
      <h1 className="sm:text-6xl text-center text-4xl text-transparent bg-clip-text bg-gradient-to-b dark:from-white dark:to-gray-300 from-black to-gray-700 py-2 mb-8">
        Plan and Organize Events
      </h1>
      <p className="text-center text-xl text-gray-900 dark:text-gray-200">
        Turn ideas into action <br /> with Budget Man's AI-powered workspace.
      </p>
      <div className="flex md:gap-12 gap-4 my-8">
        <Button asChild>
          <Link href="/sign-in">Get Budget Man</Link>
        </Button>
        <Button variant="ghost">{"Get Budget Man ->"}</Button>
      </div>
      <Image
        src={heroImg}
        alt="Hero Image"
        className="max-w-[800px] w-full mx-8 border-2 rounded-lg border-gray-300 shadow-2xl shadow-gray-600"
      />
    </section>
  );
};
