import React from "react";
import { Link } from "@heroui/link";
import { ArrowDown } from "lucide-react";

const glassButton =
  "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all";

const Hero = () => {
  return (
    <section
      className="
        relative
        h-[700px]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hex.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full px-6 pb-10 flex items-end justify-between">
          {/* Left content */}
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Experience Ronn.
              <br />
              <span className="underline underline-offset-8">
                Experience Law
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 max-w-xl">
              Whether you need a modern legal approach, stronger representation,
              or a firm that truly understands your case, we’re here to help you
              move forward with confidence.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className={`
                  ${glassButton}
                  px-6 py-2 rounded-full font-medium
                `}
              >
                Let’s Get Started
              </Link>

              <Link
                href="/about"
                className={`
                  ${glassButton}
                  px-6 py-2 rounded-full font-medium
                `}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Scroll Down */}
          <Link
            href="#next-section"
            className={`
              ${glassButton}
              px-5 py-2 rounded-full font-medium
              flex items-center gap-2
            `}
          >
            Scroll Down
            <ArrowDown size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
