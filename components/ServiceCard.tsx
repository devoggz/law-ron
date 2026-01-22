// components/ServiceCard.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  backgroundImage,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col">
      {/* Image Container with Overlay and Button */}
      <div className="relative h-[400px]  overflow-hidden group mb-6">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Discover Button with Glassmorphism */}
        <button className="absolute bottom-6 left-6 flex items-center gap-3 px-5 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all">
          <span className="text-white font-medium text-sm">Discover</span>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/30">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </button>
      </div>

      {/* Title and Description */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
