// components/TeamCard.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Chip } from "@heroui/chip";
import { ChevronRight } from "lucide-react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  focus: string[];
  slug: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  focus,
  slug,
}) => {
  return (
    <Link href={`/team/${slug}`} className="block group">
      <div className="relative h-[486px] rounded-sm overflow-hidden cursor-pointer">
        {/* Team Member Image */}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-700/90 via-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            {/* Name & Role */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold">{name}</h3>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 group-hover:bg-white/20 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
              <p className="text-lg font-bold text-white/80">{role}</p>
            </div>

            {/* Focus Areas */}
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {focus.map((area, index) => (
                  <Chip
                    key={index}
                    size="sm"
                    variant="flat"
                    className="bg-white/20 text-white backdrop-blur-sm border border-white/30"
                  >
                    {area}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
