"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { LogoTicker } from "@/components/sections";
import { ChevronRight } from "lucide-react";
import { Link } from "@heroui/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        className="max-w-7xl mx-auto py-16 lg:py-28"
      >
        {/* ABOUT US label */}
      

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-primary">
              <motion.span variants={itemVariants} className="block">
                We are a Kenya-based law firm with forward-thinking lawyers who
                deliver creative legal strategies.
              </motion.span>
            </h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              We work with private clients, start-ups, medium-sized businesses,
              large local and multinational companies.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className="flex items-center font-medium text-primary"
              >
                Experience More
                <ChevronRight className="h-6 w-6 ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex lg:col-span-6 justify-end"
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

        {/* OUR CLIENTS */}
        <motion.div variants={itemVariants} className="mt-20">
          <LogoTicker />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
