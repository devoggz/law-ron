// app/careers/page.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function CareersPage() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN - Main Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Working with us = happier Mondays.
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              Seriously. We do not think practising law and fun are mutually
              exclusive. We strongly believe that they go well together.
            </p>
          </div>

          {/* Culture Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Culture
            </h2>
            <p className="text-gray-700 leading-relaxed">
              When we say fun, we mean that we truly love what we do and who we
              do it for. We want our clients to enjoy working with us and our
              colleagues to enjoy working alongside us too. We want to make an
              impact by making sure that respect, good health, integrity and
              diversity are part of our culture.
            </p>
            <p className="text-gray-700 leading-relaxed">
              True story — our partners met during their time as pupils/legal
              assistants and they have been work colleagues and friends through
              the course of their respective careers before they set up the
              firm. This translates to a comfortable and friendly atmosphere. We
              encourage collaboration and innovation. We think they make us
              better lawyers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you work with us, you work with a smart group of people
              working at the forefront of some of the country’s biggest deals
              and disputes. We look for creative, passionate and exceptional
              people.
            </p>
          </section>

          {/* Application Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Think you have what it takes?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We would be happy to consider you next time we have an opening.
              Application Criteria:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>You are looking for more than a job.</li>
              <li>You are excellent at communication.</li>
              <li>You bring your best self to work each day.</li>
              <li>You have a great sense of humour.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              Think this is you? Come grow with us.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Get in touch with us on{" "}
              <a
                href="mailto:careers@ronn.law"
                className="text-orange underline"
              >
                careers@ronn.law
              </a>
              . Please share your CV, academic certificates, personal statement
              and your response to one of the following questions (max. 200
              words):
            </p>

            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>You are a superhero. What is your superpower?</li>
              <li>
                If you won USD 50 million dollars, how would you spend it and
                what would you do?
              </li>
              <li>
                It is your first day at RONN Law. You are sent home halfway
                during the day. Where would you go and what would you do before
                going home?
              </li>
            </ol>
          </section>
        </div>

        {/* RIGHT COLUMN - Optional Image/Graphic */}
        <div className="lg:col-span-4 flex flex-col justify-start items-center gap-6">
          <Image
            src="/images/nairobi-sky.jpg"
            alt="Working at RONN Law"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />

          <div className="bg-gray-50 p-6 rounded-xl shadow-md w-full">
            <h3 className="text-xl font-semibold mb-2">Why Join Us?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              At RONN, we blend creativity, fun, and professionalism. You get a
              collaborative, innovative environment where your ideas actually
              matter. Work with smart people, grow your skills, and make an
              impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
