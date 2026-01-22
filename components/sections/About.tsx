import React from "react";
import { LogoTicker } from "@/components/sections/index";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl px-6 mx-auto py-16">
        {/* About Us Label */}
        <div className="mb-12 border-b border-gray-200">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            About Us
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Empty in the image */}
          <div></div>

          {/* Right Column - Main Text */}
          <div className="">
            <h2 className="text-4xl lg:text-2xl font-semibold leading-tight text-dark-300 mb-4">
              We are a Kenya-based law firm with top-rated and forward-thinking
              lawyers who can help you with creative legal strategies.
            </h2>
            <p className="text-lg text-dark-100">
              We work with private clients, start-ups, medium-sized businesses,
              large local and multinational companies.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat 1 */}
          <div className="flex flex-col items-center border border-gray-200 rounded-tr-full rounded-br-full  bg-orange p-8 hover:border-gray-300 transition-colors">
            <div className="mb-4 ">
              <h3 className="text-5xl font-bold text-gray-900">50+</h3>
            </div>
            <p className="text-sm text-gray-500">Law Firms Served</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center border border-gray-200 rounded-bl-full rounded-tr-full p-8 hover:border-gray-300 bg-teal-700 transition-colors">
            <div className="mb-4">
              <h3 className="text-5xl font-bold text-orange">20,000+</h3>
            </div>
            <p className="text-sm text-g">Leads Generated</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center border border-gray-200 p-8 hover:border-gray-300 bg-primary rounded-bl-full  transition-colors">
            <div className="mb-4">
              <h3 className="text-5xl font-bold text-orange">10+</h3>
            </div>
            <p className="text-sm text-gray-500">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
