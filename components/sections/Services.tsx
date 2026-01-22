"use client";

import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/app/data/services";

const Services: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl px-2 mx-auto">
        <div className="flex items-center border-b border-gray-200 mb-6">
          <span className="inline-block px-4 py-2 text-xs text-gray-200 bg-primary">
            SERVICES
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
