"use client";

import { Tabs, Tab } from "@heroui/tabs";

interface PartnerExperience {
  name: string;
  description: string;
}

interface PartnerTabsProps {
  partner: {
    bio: string;
    experience: PartnerExperience[];
    recognition: {
      title: string;
      logo: string;
    }[];
    qualifications: {
      institution: string;
      logo: string;
      detail: string;
    }[];
  };
}

export default function PartnerTabs({ partner }: PartnerTabsProps) {
  return (
    <Tabs
      fullWidth
      color="primary"
      radius="none"
      aria-label="Partner profile"
      variant="solid"
      classNames={{ panel: "pt-8" }}
    >
      <Tab key="bio" title="Bio">
        <div className="prose font-regular">
          <p>{partner.bio}</p>
        </div>
      </Tab>

      <Tab key="experience" title="Experience">
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4">
          {partner.experience.map((item, index) => (
            <div key={index} className="space-y-1">
              <p className="font-semibold">• {item.name}</p>
              <small className="text-gray-600">{item.description}</small>
            </div>
          ))}
        </div>
      </Tab>

      <Tab key="recognition" title="Recognition">
        <div className="flex flex-wrap gap-6">
          {partner.recognition.map((rec, index) => (
            <div
              key={index}
              className="w-36 flex-shrink-0 text-center flex flex-col items-center"
            >
              <img
                src={rec.logo}
                alt={rec.title}
                className="h-12 object-contain"
              />
              <p className="text-xs mt-3">{rec.title}</p>
            </div>
          ))}
        </div>
      </Tab>

      <Tab key="qualifications" title="Admissions & Education">
        <div className="space-y-6">
          {partner.qualifications.map((q, index) => (
            <div key={index} className="flex items-center gap-4 flex-wrap">
              <img
                src={q.logo}
                alt={q.institution}
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="font-semibold">{q.institution}</p>
                <p className="text-sm text-gray-600">{q.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Tab>
    </Tabs>
  );
}
