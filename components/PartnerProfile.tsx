"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@heroui/button";
import React from "react";
import { partners } from "@/app/data/data";

export default function PartnerProfileLayout({
  partner,
  children,
}: {
  partner: any;
  children: React.ReactNode;
}) {
  const currentIndex = partners.findIndex((p) => p.slug === partner.slug);

  const previousPartner = currentIndex > 0 ? partners[currentIndex - 1] : null;
  const nextPartner =
    currentIndex < partners.length - 1 ? partners[currentIndex + 1] : null;

  return (
    <section className="w-full">
      {/* HERO */}
      <div className="relative rounded-sm w-full h-[30vh] lg:h-[30vh] overflow-hidden">
        <Image
          src={partner.coverImage || partner.image}
          alt={`${partner.name} cover`}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Title */}
        <div className="relative z-10 flex items-center justify-center h-full text-center pointer-events-none">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              {partner.name}
            </h1>
            <p className="mt-2 text-white/80 font-semibold text-2xl lg:text-3xl">
              {partner.title}
            </p>
            <p className="mt-2 text-white/80 text-sm lg:text-base">
              {partner.practice}
            </p>
          </div>
        </div>

        {/* DESKTOP NAVIGATION – bottom pinned */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6 pb-6 flex items-center justify-between text-white">
            {/* Previous */}
            {previousPartner ? (
              <Link
                href={`/team/${previousPartner.slug}`}
                className="group flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition"
              >
                <span className="group-hover:-translate-x-1 transition-transform">
                  ←
                </span>
                {previousPartner.name}
              </Link>
            ) : (
              <span />
            )}

            {/* Next */}
            {nextPartner ? (
              <Link
                href={`/team/${nextPartner.slug}`}
                className="group flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition"
              >
                {nextPartner.name}
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

      {/* MOBILE NAVIGATION – below hero */}
      <div className="lg:hidden bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-gray-800">
          {previousPartner ? (
            <Link
              href={`/team/${previousPartner.slug}`}
              className="group flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              {previousPartner.name}
            </Link>
          ) : (
            <span />
          )}

          {nextPartner ? (
            <Link
              href={`/team/${nextPartner.slug}`}
              className="group flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition"
            >
              {nextPartner.name}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* LEFT COLUMN – Key Contact */}
        <aside className="lg:col-span-1 space-y-6 order-last lg:order-first">
          <Image
            src={partner.image}
            alt={partner.name}
            width={400}
            height={500}
            className="object-cover"
          />

          <div className="bg-gray-50 p-4 space-y-6 text-sm font-medium text-primary">
            <p>
              <strong>Email:</strong> {partner.email}
            </p>
            <p>
              <strong>Mobile:</strong> {partner.mobile}
            </p>
            <p>
              <strong>Focus:</strong> {partner.focus}
            </p>

            {/* CV DOWNLOAD – now visible below Focus */}
            {partner.cvUrl && (
              <Button
                as="a"
                href={partner.cvUrl}
                download
                radius="none"
                variant="bordered"
                className="w-full flex items-center justify-center gap-2 mt-2 text-primary"
              >
                <Download size={16} />
                Download CV
              </Button>
            )}
          </div>
        </aside>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-3 space-y-12">{children}</div>
      </div>
    </section>
  );
}
