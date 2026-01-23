// app/contact/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import InquiryForm from "@/components/forms/InquiryForm";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Dummy subscription handler
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="w-full">
      {/* HERO SECTION */}
      <div className="relative w-full h-[20vh] lg:h-[20vh] overflow-hidden">
        <Image
          src="/images/nairobi.jpg"
          alt="RONN Law Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="max-w-7xl mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN: Office info + newsletter */}
        <div className="space-y-12">
          {/* Office Info */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">Our Office</h2>
            <div className="space-y-2 text-gray-700 text-lg font-regular">
              <p>5th Floor, The Address Muthangari Drive, Westlands </p>
              <p>P.O. Box 29185 – 00100, Nairobi, Kenya</p>
            </div>
            <div className="mt-4 font-bold space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@ronn.law"
                  className="text-orange hover:underline"
                >
                  info@ronn.law
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+254706498520"
                  className="text-orange hover:underline"
                >
                  +254 706 498 520
                </a>
              </p>
            </div>
          </section>

          {/* Opening Hours */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              We'd love to hear from you
            </h2>
            <p className="text-gray-700 font-regular leading-relaxed">
              Our office is open Monday to Friday (except on Kenyan public
              holidays) from 8:30 am to 4:45 pm. You can reach us using the
              contact details above.
            </p>

            <div className="py-12 h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.84157672864!2d36.7816!3d-1.2701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b3a3f17163%3A0x1627fdf0b2a2d6b5!2sWestlands%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RONN Law Office Location"
              ></iframe>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Dummy Google Maps */}
        <div className="w-full h-[400px] lg:h-full  overflow-hidden shadow-sm">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
