"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      key: "1",
      question: "What is your expertise?",
      answer:
        "Our firm specializes in various areas of law, including family law, criminal defense, and personal injury. With years of experience, we provide expert guidance tailored to your unique situation. Trust us to advocate for your best interests.",
    },
    {
      key: "2",
      question: "How do I start?",
      answer:
        "Getting started is simple. Contact us through our website or call our office to schedule a free consultation. During this initial meeting, we'll discuss your case, answer your questions, and outline the next steps in your legal journey.",
    },
    {
      key: "3",
      question: "What are your fees?",
      answer:
        "Our fee structure varies depending on the type of case and complexity. We offer transparent pricing and will provide a detailed breakdown during your consultation. We also offer flexible payment plans to ensure our services are accessible to those who need them.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center  mb-6">
          <span className="inline-block px-4 py-2 text-xs text-white rounded-tr-full rounded-br-full bg-primary font-medium">
            FAQ's
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-primary leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              <p className="text-regular text-gray-600 leading-relaxed">
                I am an entrepreneur looking for legal support - From company
                formation, protecting your ideas, compliance, estate planning,
                dispute avoidance to divesting.
              </p>
              <p className="text-regular text-gray-600 leading-relaxed">
                We are a business wanting to protect our interests - We have a
                wide range of services and a passionate multidisciplinary team
                ready to help you.
              </p>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion
              variant="splitted"
              defaultExpandedKeys={["1"]}
              className="gap-4"
              itemClasses={{
                base: "shadow-none  rounded-lg hover:border-gray-300 transition-colors",
                title: "font-semibold text-primary",
                trigger: "py-5 ",
                content: " pb-4 pt-0",
              }}
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.key}
                  aria-label={faq.question}
                  title={
                    <span className="text-lg font-semibold text-primary">
                      {faq.question}
                    </span>
                  }
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
