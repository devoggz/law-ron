"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { Link } from "@heroui/link";

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
    {
      key: "4",
      question: "Can I get updates?",
      answer:
        "Absolutely. We believe in keeping our clients informed every step of the way. You'll receive regular updates via phone, email, or in-person meetings, depending on your preference. Our team is always available to answer your questions and address any concerns.",
    },
    {
      key: "5",
      question: "What if I need help?",
      answer:
        "If you need assistance at any time, our team is here for you. You can reach us by phone, email, or through our online contact form. We strive to respond to all inquiries promptly and are committed to providing the support you need throughout your case.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
              FAQs
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Frequently Asked Question
            </h2>
            <div className="mt-8">
              <p className="text-sm text-gray-600 mb-2">Still Need Help?</p>
              <Link
                href="/contact"
                className="text-base font-semibold text-gray-900 underline hover:no-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion variant="light" defaultExpandedKeys={["1"]}>
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.key}
                  aria-label={faq.question}
                  title={
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                  }
                  className="border-b border-gray-200 py-4"
                >
                  <p className="text-sm text-gray-600 leading-relaxed pb-4">
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
