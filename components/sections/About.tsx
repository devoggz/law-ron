import React from "react";
import Image from "next/image";
import { LogoTicker } from "@/components/sections/index";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto py-12 lg:py-24">
        {/* About Us Label */}
        <div className="flex items-center mb-8">
          <span className="inline-block px-4 py-2 text-xs text-white bg-teal-700 rounded-tr-full rounded-br-full font-medium tracking-wide">
            ABOUT US
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Left Column – Image */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative h-full min-h-[420px] w-full overflow-hidden">
              <Image
                src="/images/nairobi.jpg"
                alt="Nairobi skyline"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay for polish */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* Right Column – Main Text */}
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
      </div>
    </section>
  );
};

export default About;
