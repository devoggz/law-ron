"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
    <motion.div
      onClick={() => router.push(`/services/${slug}`)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative h-[380px] overflow-hidden cursor-pointer rounded-sm group shadow-md"
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Text Block — title + description aligned */}
      <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3">
        <h3 className="text-lg lg:text-2xl font-bold text-white leading-tight">
          {title}
        </h3>

        <p className="text-sm text-white/90 leading-relaxed line-clamp-2 max-w-[90%]">
          {description}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 z-20 bg-orange/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/services/${slug}`);
          }}
          className="flex items-center gap-3 px-4 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300"
        >
          <span className="text-white font-medium text-sm whitespace-nowrap">
            Discover More
          </span>
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/30">
            <ArrowRight className="w-4 h-4 text-white" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
