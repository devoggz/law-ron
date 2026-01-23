"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { services } from "@/app/data/services";

interface Experience {
  name: string;
  description: string;
}

interface KeyContact {
  name: string;
  email: string;
  mobile: string;
  image: string;
}

interface ServiceProfileLayoutProps {
  service: {
    slug: string;
    name: string;
    image?: string;
    overview: string;
    experience: Experience[];
    keyContact: KeyContact;
  };
}

export default function ServiceProfileLayout({
  service,
}: ServiceProfileLayoutProps) {
  const currentIndex = services.findIndex((s) => s.slug === service.slug);

  const previousService = currentIndex > 0 ? services[currentIndex - 1] : null;

  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <section className="w-full">
      {/* HERO SECTION */}
      <div className="relative w-full h-[20vh] lg:h-[30vh] overflow-hidden">
        <Image
          src={service.image || "/images/nairobi.jpg"}
          alt={`${service.name} cover`}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Title */}
        <div className="relative z-10 flex items-center justify-center h-full text-center pointer-events-none">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            {service.name}
          </h1>
        </div>

        {/* Navigation – bottom pinned */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6 pb-6 flex items-center justify-between text-white">
            {/* Previous */}
            {previousService ? (
              <Link
                href={`/services/${previousService.slug}`}
                className="group flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition"
              >
                <span className="group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                {previousService.name}
              </Link>
            ) : (
              <span />
            )}

            {/* Next */}
            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="group flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition"
              >
                {nextService.name}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* LEFT COLUMN – Key Contact */}
        <aside className="lg:col-span-1 space-y-6">
          <Image
            src={service.keyContact.image}
            alt={service.keyContact.name}
            width={400}
            height={300}
            className="object-cover"
          />
          <div className="bg-gray-50 p-4 ">
            <h2 className="text-xl font-semibold text-orange mb-4">
              Key Contact
            </h2>
            <p
              className="font-bold text-primary
            text-lg"
            >
              {service.keyContact.name}
            </p>
            <p
              className="font-regular text-primary
            text-md"
            >
              E: {service.keyContact.email}
            </p>
            <p
              className="font-regular text-primary
            text-md"
            >
              M: {service.keyContact.mobile}
            </p>
          </div>
        </aside>

        {/* RIGHT COLUMN – Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 font-regular leading-relaxed">
              {service.overview}
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Lawyers Experience</h2>
            <div className="space-y-6">
              {service.experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-teal pl-4">
                  <h3 className="text-lg font-medium">{exp.name}</h3>
                  <p className="text-gray-600 font-regular leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
