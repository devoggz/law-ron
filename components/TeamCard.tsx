// components/TeamCard.tsx
import React from "react";
import Image from "next/image";
import { Chip } from "@heroui/chip";
import { ChevronRight } from "lucide-react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  // description: string;
  focus: string[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  // description,
  focus,
}) => {
  return (
    <div className="relative h-[500px] overflow-hidden group cursor-pointer">
      {/* Team Member Image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover Overlay with Details */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          {/* Name and Role */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-bold">{name}</h3>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-1 border-white/30 hover:bg-white/20 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
            <p className="text-lg font-bold text-white/80 mb-4">{role}</p>
          </div>

          {/* Description */}
          {/*<p className="text-sm text-white/90 leading-relaxed mb-4">*/}
          {/*  {description}*/}
          {/*</p>*/}

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
  );
};

export default TeamCard;
