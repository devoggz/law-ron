import { partners } from "@/app/data/data";
import PartnerProfile from "@/components/PartnerProfile";
import PartnerTabs from "@/components/PartnerTabs";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PartnerPage({ params }: PageProps) {
  const { slug } = await params;

  const partner = partners.find((p) => p.slug === slug);

  if (!partner) notFound();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[8vh]  flex items-center justify-center overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
      </section>

      {/* PROFILE SECTION */}
      <section className="relative -mt-24 z-20">
        <PartnerProfile partner={partner}>
          <PartnerTabs partner={partner} />
        </PartnerProfile>
      </section>
    </>
  );
}
