"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { LogoTicker } from "@/components/sections";
import { ChevronRight } from "lucide-react";
import { Link } from "@heroui/link";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger reveal only once when scrolled into view
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-28">
        {/* ABOUT US label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center mb-10"
        >
          <span className="inline-block px-4 py-2 text-xs text-white bg-teal-700 rounded-tr-full rounded-br-full font-medium tracking-wide">
            ABOUT US
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-primary">
              We are a Kenya-based law firm with top-rated and forward-thinking
              lawyers who can help you with creative legal strategies.
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              We work with private clients, start-ups, medium-sized businesses,
              large local and multinational companies.
            </p>
            <Link href="/about" className="px-4 py-2 font-medium text-primary">
              Experience More
              <ChevronRight className="h-6 w-6 ml-8" />
            </Link>
          </motion.div>

          {/* Right: Image with parallax */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 flex justify-end"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative w-[360px] h-[360px] lg:w-[420px] lg:h-[420px] overflow-hidden"
            >
              <Image
                src="/images/blob.png"
                alt="Nairobi skyline"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20">
          <LogoTicker />
        </div>
      </div>
    </section>
  );
};

export default About;
