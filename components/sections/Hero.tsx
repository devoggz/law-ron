import React from "react";
import { Link } from "@heroui/link";
import { ArrowDown, ChevronRight } from "lucide-react";

const glassButton =
  "backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all";

const Hero = () => {
  return (
    <section
      className="
        relative
        h-[686px]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/nairobi-sky.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:pb-8">
        <div className="w-full px-8 pb-10 flex items-end justify-between">
          {/* Left content */}
          <div className="max-w-2xl text-white space-y-8">
            <h1 className="text-4xl md:text-4xl lg:text-7xl text-gray-200 font-semibold tracking-tight leading-tighter">
              experience <span className="font-bold text-orange">RONN.</span>
              <br />
              <span className="text-teal">= experience Law</span>
            </h1>

            <p className="mt-6 md:text-lg text-white/80 max-w-2xl">
              <span className="font-bold text-xl">
                Do more. Achieve more. Be more. Expect more. Grow more…
              </span>{" "}
              <br />
              Whether it is a transaction, dispute, project or compliance
              matter, our lawyers work hard to give you the best results.
            </p>

            <div className="mt-8 flex  gap-4">
              {/*<Link*/}
              {/*  href="/contact"*/}
              {/*  className={`*/}
              {/*    ${glassButton}*/}
              {/*    px-4 py-2  font-medium*/}
              {/*  `}*/}
              {/*>*/}
              {/*  Our Expertise*/}
              {/*  <ChevronRight className="h-6 w-6 ml-8" />*/}
              {/*</Link>*/}

              <Link
                href="/about"
                className={`
                  ${glassButton}
                  px-4 py-2  font-medium
                `}
              >
                Learn More
                <ChevronRight className="h-6 w-6 ml-8" />
              </Link>
            </div>
          </div>

          {/* Scroll Down */}
          <Link
            href="#next-section"
            className={`
              ${glassButton}
              px-5 py-2  font-medium
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
