// components/Team.tsx
"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamCard from "@/components/TeamCard";
import { partners } from "@/app/data/data";

const Team: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 400;
    scrollContainerRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <span className="inline-block px-4 py-2 text-xs rounded-tr-full rounded-br-full text-gray-200 bg-orange">
            TEAM
          </span>
        </div>

        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900 max-w-xl">
            Meet the Experts Behind RONN
          </h2>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {partners.map((partner) => (
            <div key={partner.slug} className="flex-shrink-0 w-[350px]">
              <TeamCard
                image={partner.image}
                name={partner.name}
                role={partner.title}
                focus={partner.focus.split(",")}
                slug={partner.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
