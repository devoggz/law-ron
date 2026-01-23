import { footerLinks } from "@/app/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F5F3ED] text-primary mt-16">
      <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/images/ronn-logo.svg"
            alt="EarthBackers logo"
            width={100}
            height={100}
          />
        </div>

        {/* Links */}
        <ul className="flex flex-wrap gap-6 text-sm font-medium">
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a
                href={link}
                className="hover:text-orange transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-[#D9D6C6] max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto py-2 px-6 text-center text-sm text-primary">
        <p>
          Copyright © {new Date().getFullYear()} RONN LAW. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
