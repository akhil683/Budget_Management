import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";

const PricingPage = () => {
  return (
    <main className="flex flex-col mt-8 justify-center">
      <Suspense fallback={<h1 className="text-6xl">Loading...</h1>}>
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-6xl mb-4 font-medium dark:text-white">Pricing</h1>
          <p className="font-medium text-gray-600 dark:gray-100">
            Start for free and choose premium if you want extra features !
          </p>
        </section>
        <section className="flex gap-8 flex-wrap  items-center justify-center mt-12">
          {/* TODO:Free Tier */}
          <div className="md:w-[300px] p-4 rounded-xl border border-gray-400 hover:border-gray-700 duration-100 flex flex-col items-center justify-center">
            <p className="text-xl mb-4">Free</p>
            <p className="text-4xl font-medium">$0 / month</p>
            <ul className="text-gray-700 flex my-6 border-y border-y-gray-400 p-6 flex-col gap-2">
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-green-700 " /> Multiple Color
                themes
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-green-700 " /> AI Budget Chatbot
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-green-700 " /> Unlimited budget
                files
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-green-700 " /> Email Support
              </li>
            </ul>
            <Button className="w-full rounded-full">Get Started</Button>
          </div>

          {/*TODO: Premium Tier */}
          <div className="md:w-[300px] p-4 rounded-xl border border-gray-400 hover:border-gray-700 duration-100 flex flex-col items-center justify-center">
            <p className="text-xl mb-4">Premium</p>
            <p className="text-4xl font-medium">$1.99 / month</p>
            <ul className="text-gray-700 border-y border-y-gray-400 p-6 flex my-6 flex-col gap-2">
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-green-700 " /> Multiple Color
                themes
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-green-700 " /> AI Budget Chatbot
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-green-700 " /> Unlimited budget
                files
              </li>
              <li className="flex gap-2 items-center">
                <FaCheckCircle className="text-green-700 " /> Email Support
              </li>
            </ul>
            <Button className="w-full rounded-full">Get Started</Button>
          </div>
        </section>
      </Suspense>
    </main>
  );
};

export default PricingPage;
