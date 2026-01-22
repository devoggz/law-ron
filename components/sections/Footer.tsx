import { footerLinks } from "@/app/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        {/*<Image*/}
        {/*  src="/images/ronn-logo.svg"*/}
        {/*  alt="RONN logo"*/}
        {/*  width={24}*/}
        {/*  height={24}*/}
        {/*/>*/}
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2025 RONN LAW. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
