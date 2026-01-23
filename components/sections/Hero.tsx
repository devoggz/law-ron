"use client";

import React from "react";
import { Link } from "@heroui/link";
import { ArrowDown, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const glassButton =
  "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[686px] overflow-hidden">
      {/* Background Image – slow infinite zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/nairobi-sky.jpg')",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:pb-8">
        <div className="w-full px-8 pb-10 flex items-end justify-between">
          {/* Left content */}
          <div className="max-w-2xl text-white space-y-8">
            <motion.h1
              className="text-4xl md:text-4xl lg:text-7xl text-gray-200 font-semibold tracking-tight leading-tighter"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              experience <span className="font-bold text-orange">RONN.</span>
              <br />
              <span className="text-teal">= experience Law</span>
            </motion.h1>

            <motion.p
              className="mt-6 md:text-lg text-white/80 max-w-3xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
            >
              <span className="font-bold text-xl">
                Do more. Achieve more. Be more. Expect more. Grow more…
              </span>
              <br />
              Whether it is a transaction, dispute, project or compliance
              matter, our lawyers work hard to give you the best results.
            </motion.p>

            <motion.div
              className="mt-8 flex gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <Link
                href="/about"
                className={`${glassButton} px-4 py-2 font-medium`}
              >
                Learn More
                <ChevronRight className="h-6 w-6 ml-8" />
              </Link>
            </motion.div>
          </div>

          {/* Scroll Down */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="hidden md:flex"
          >
            <Link
              href="#"
              className={`${glassButton} px-5 py-2 font-medium flex items-center gap-2`}
            >
              Scroll Down
              <ArrowDown size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
