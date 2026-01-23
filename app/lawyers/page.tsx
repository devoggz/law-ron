// app/partners/page.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamCard from "@/components/TeamCard";
import { partners } from "@/app/data/data";

export default function PartnersPage() {
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
    <section className="w-full">
      {/* HERO SECTION */}
      <div className="relative w-full h-[20vh] lg:h-[20vh] overflow-hidden">
        <Image
          src="/images/nairobi.jpg"
          alt="Our Partners"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Meet the Experts Behind RONN
          </h1>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto flex items-center justify-center py-16 text-center">
        <p className="text-lg lg:text-xl text-primary font-regular leading-relaxed max-w-2xl">
          Our partners are the driving force behind our innovative legal
          solutions. Each brings deep experience, unique focus areas, and a
          commitment to delivering top-tier legal services. Explore their
          expertise and discover how they can help you navigate complex legal
          challenges.
        </p>
      </div>

      {/* TEAM CAROUSEL */}
      <section className="relative overflow-hidden bg-white py-12">
        <div className="max-w-7xl  mx-auto">
          <div className="flex items-end justify-between mb-12">
            {/* Carousel Navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll("left")}
                className="flex items-center justify-center w-12 h-12 rounded-full border-1 border-gray-300 hover:border-orange hover:bg-orange hover:text-white transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="flex items-center justify-center w-12 h-12 rounded-full border-1 border-gray-300 hover:border-orange hover:bg-orange hover:text-white transition-all"
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

        {/* Hide scrollbar */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* NEWSLETTER & MAP */}
    </section>
  );
}
