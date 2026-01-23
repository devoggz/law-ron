import React from "react";
import { LogoTicker } from "@/components/sections/index";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl  mx-auto py-12 lg:py-24">
        {/* About Us Label */}
        <div className="flex items-center mb-8">
          <span className="inline-block px-4 py-2 text-xs text-white bg-teal-700 rounded-tr-full rounded-br-full font-medium tracking-wide">
            ABOUT US
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Left Column - Breathing Space */}
          <div className="hidden lg:block lg:col-span-5"></div>

          {/* Right Column - Main Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-primary">
              We are a Kenya-based law firm with top-rated and forward-thinking
              lawyers who can help you with creative legal strategies.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We work with private clients, start-ups, medium-sized businesses,
              large local and multinational companies.
            </p>
          </div>
        </div>
        <LogoTicker />
        {/* Stats Grid */}

        {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-8">*/}
        {/*  /!* Stat 1 *!/*/}
        {/*  <div className="group flex flex-col border-4 border-teal-600 rounded-tr-[80px] rounded-br-[80px] p-10 hover:border-orange transition-all duration-300 hover:shadow-lg">*/}
        {/*    <div className="mb-4">*/}
        {/*      <h3 className="text-6xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">*/}
        {/*        50+*/}
        {/*      </h3>*/}
        {/*    </div>*/}
        {/*    <p className="text-base font-medium text-gray-600">*/}
        {/*      Law Firms Served*/}
        {/*    </p>*/}
        {/*  </div>*/}

        {/*  /!* Stat 2 *!/*/}
        {/*  <div className="group flex flex-col border-4 border-orange rounded-bl-[80px] rounded-tr-[80px] p-10 hover:border-teal-600 transition-all duration-300 hover:shadow-lg">*/}
        {/*    <div className="mb-4">*/}
        {/*      <h3 className="text-6xl font-bold text-orange group-hover:text-gray-900 transition-colors duration-300">*/}
        {/*        20,000+*/}
        {/*      </h3>*/}
        {/*    </div>*/}
        {/*    <p className="text-base font-medium text-gray-600 text-center">*/}
        {/*      Leads Generated*/}
        {/*    </p>*/}
        {/*  </div>*/}

        {/*  /!* Stat 3 *!/*/}
        {/*  <div className="group flex flex-col border-4 border-primary rounded-bl-[80px] rounded-tr-[80px] p-10 hover:border-orange transition-all duration-300 hover:shadow-lg">*/}
        {/*    <div className="mb-4">*/}
        {/*      <h3 className="text-6xl font-bold text-primary group-hover:text-orange transition-colors duration-300">*/}
        {/*        10+*/}
        {/*      </h3>*/}
        {/*    </div>*/}
        {/*    <p className="text-base font-medium text-gray-600 text-center">*/}
        {/*      Years of Experience*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default About;
