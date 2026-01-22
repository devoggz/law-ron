// components/PartnerProfileLayout.tsx

import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "@heroui/button";
import React from "react";

export default function PartnerProfile({
  partner,
  children,
}: {
  partner: any;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full">
      {/* HERO SECTION */}
      <div className="relative w-full h-[40vh] lg:h-[20vh] overflow-hidden">
        <Image
          src={partner.coverImage || partner.image}
          alt={`${partner.name} cover`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center justify-center text-center ">
          <div>
            <div className="absolute left-12 lg:text-left">
              <h2 className="text-4xl font-bold text-gray-200">
                {partner.name}
              </h2>
              <p className="text-gray-200">
                {partner.title} | {partner.practice}{" "}
              </p>
              <p className="text-sm mt-1 text-gray-500"></p>
            </div>
          </div>
          <Button
            as="a"
            radius="none"
            href={partner.cvUrl}
            download
            className="absolute bottom-4 right-4 flex items-center gap-2 bg-orange/80 text-white backdrop-blur-md hover:bg-teal"
          >
            <Download size={16} />
            Download CV
          </Button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* LEFT COLUMN */}
        <aside className="lg:col-span-1 space-y-6">
          {/* IMAGE + DOWNLOAD */}
          <div className="relative  overflow-hidden">
            <Image
              src={partner.image}
              alt={partner.name}
              width={400}
              height={300}
              className="object-cover"
            />

            {/* DOWNLOAD BUTTON */}
          </div>

          <div className="text-sm space-y-2">
            <p>
              <strong>Email:</strong> {partner.email}
            </p>
            <p>
              <strong>Mobile:</strong> {partner.mobile}
            </p>
            <p>
              <strong>Focus:</strong> {partner.focus}
            </p>
          </div>
        </aside>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-3">{children}</div>
      </div>
    </section>
  );
}
