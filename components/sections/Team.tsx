// components/Team.tsx
"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TeamCard from "@/components/TeamCard";

const Team: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      image: "/images/anthony.jpeg",
      name: "Anthony Njogu",
      role: "Managing Partner",
      description:
        "When you're under pressure, [Anthony] delivers on time. He's very accessible and very responsive, even if he's attending court. Chambers Global 2017.",
      focus: [
        "Corporate",
        "Intellectual Property",
        "Media and Telecoms’ disputes",
      ],
    },
    {
      image: "/images/njau.jpeg",
      name: "Njau Makuha",
      role: "Partner",
      description:
        '"Njau [can] listen to the needs of customers and quickly grasp the key factors of the problem. He has a deep understanding of large projects and investment projects in Kenya." IFLR1000 2020',
      focus: ["Energy, Infrastructure and Natural Resources"],
    },
    {
      image: "/images/sean.jpeg",
      name: "Sean Omondi",
      role: "Partner",
      description:
        "Sean Omondi is prominent in employee disputes and union matters. Legal 500 2020.",
      focus: ["Employee Disputes", "Union matters"],
    },
    {
      image: "/images/muthoni.jpeg",
      name: "Muthoni Runji-Pertet",
      role: "Partner",
      description:
        "Muthoni is a real estate & finance lawyer who successfully balances being both detail-oriented and creative with her advice.",
      focus: ["Real Estate", "Banking & Finance"],
    },
    {
      image: "/images/mwangi.jpeg",
      name: "Mwangi Mbogo",
      role: "Partner",
      description:
        "Mwangi has acted as lead counsel to both local and international clients in a number of transactions over the years.",
      focus: [
        "Corporate Governance",
        "Corporate M&A and Commercial",
        "Risk management and Compliance",
      ],
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl px-6 mx-auto">
        {/* Header with Navigation */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Meet the Experts Behind the Success of VirtuLaw
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 ml-8">
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

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-shrink-0 w-[350px]">
              <TeamCard
                image={member.image}
                name={member.name}
                role={member.role}
                // description={member.description}
                focus={member.focus}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Team;
