"use client";

import React from "react";
import safLogo from "@/public/images/saf.png";
import araLogo from "@/public/images/ara.png";
import mulLogo from "@/public/images/mul.png";
import sanLogo from "@/public/images/san.png";
import ubLogo from "@/public/images/ub.png";
import eablLogo from "@/public/images/eabl.png";
import imLogo from "@/public/images/im.png";
import crbcLogo from "@/public/images/crbc.png";
import copiaLogo from "@/public/images/copia.png";
import Image from "next/image";
import { motion } from "framer-motion";

function LogoTicker() {
  return (
    <div className="py-4  bg-white md:py-4">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={safLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image src={araLogo} alt="QTM Logo" className="logo-ticker-image" />
            <Image
              src={mulLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image src={sanLogo} alt="Cel Logo" className="logo-ticker-image" />
            <Image
              src={ubLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />

            <Image
              src={eablLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={imLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={crbcLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={copiaLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />

            {/* Second Logo Set */}
            <Image
              src={safLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image src={araLogo} alt="QTM Logo" className="logo-ticker-image" />
            <Image
              src={mulLogo}
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image src={sanLogo} alt="Cel Logo" className="logo-ticker-image" />
            <Image
              src={ubLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={eablLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={imLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={crbcLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={copiaLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
