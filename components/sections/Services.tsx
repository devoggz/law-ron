// components/Services.tsx
import React from "react";
import ServiceCard from "../ServiceCard";

const Services: React.FC = () => {
  const services = [
    {
      backgroundImage: "/images/hero2.jpg",
      title: "Dispute Resolution",
      description:
        "We handle contentious matters in various industries, including banking, communication, insurance, technology, media and entertainment. ",
    },
    {
      backgroundImage: "/images/hero2.jpg",
      title: "Employment",
      description:
        "We are one of Kenya’s go-to employment firms because of our team’s track record in this area as well as our strategic and collaborative approach. ",
    },
    {
      backgroundImage: "/images/hero2.jpg",
      title: "Real Estate & Finance",
      description:
        "We have experience acting for private developers, financiers, government, DFIs, exploration companies and regulators. ",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl px-6 mx-auto">
        {/* Section Label */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-2 text-xs text-gray-600 bg-gray-100 rounded-full">
            Services
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Comprehensive Legal Services Tailored for You
          </h2>
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-base text-gray-600 leading-relaxed">
            At Joseph, Hollander & Craft, we provide expert legal services
            tailored to your needs, with personalized support from experienced
            attorneys
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              backgroundImage={service.backgroundImage}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
