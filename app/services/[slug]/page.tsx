import { services } from "@/app/data/services";
import ServiceProfileLayout from "@/components/ServiceProfileLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-2xl font-semibold">Service not found</h1>
      </div>
    );
  }

  return <ServiceProfileLayout service={service} />;
}
