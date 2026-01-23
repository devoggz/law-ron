"use client";

import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/app/data/services";
import { ChevronRight } from "lucide-react";
import { Link } from "@heroui/link";

const glassButton =
  "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all";
const Services: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12">
      <div className="max-w-7xl px-2 mx-auto">
        <div className="flex items-center  mb-6">
          <span className="inline-block px-4 py-2 text-xs rounded-tr-full rounded-br-full text-gray-200 bg-primary">
            EXPERTISE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              backgroundImage={service.image}
              title={service.name}
              description={service.overview}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
