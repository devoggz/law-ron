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
      className="flex flex-col cursor-pointer group"
      onClick={() => router.push(`/services/${slug}`)}
    >
      {/* Image Container */}
      <div className="relative h-[380px] overflow-hidden rounded-lg mb-6 shadow-md">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* CTA Button */}
        <button className="absolute bottom-6 right-6 flex items-center gap-3 px-4 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 group-hover:gap-4">
          <span className="text-white font-medium text-sm whitespace-nowrap">
            Discover More
          </span>
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/30 transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3 px-1">
        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
