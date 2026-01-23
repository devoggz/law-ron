"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  slug: string;
  backgroundImage: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  slug,
  backgroundImage,
  title,
  description,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/services/${slug}`)}
      className="relative h-[380px] rounded-lg overflow-hidden cursor-pointer group shadow-md"
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Base Gradient for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Title — top right */}
      <div className="absolute top-6 right-6 z-10 max-w-[70%] ">
        <h3 className="text-lg lg:text-2xl font-bold text-white leading-tight">
          {title}
        </h3>
      </div>

      {/* Description — bottom */}
      <div className="absolute bottom-6 left-5 right-5 z-10">
        <p className="text-sm text-white/90 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 z-20 bg-teal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/services/${slug}`);
          }}
          className="flex items-center gap-3 px-4 py-2.5 bg-white/20 backdrop-blur-md border border-white/30  hover:bg-white/30 transition-all duration-300"
        >
          <span className="text-white font-medium text-sm whitespace-nowrap">
            Discover More
          </span>
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/30">
            <ArrowRight className="w-4 h-4 text-white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
