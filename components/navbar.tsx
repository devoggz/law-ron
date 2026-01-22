"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import NextLink from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { useTheme } from "next-themes";
import { ArrowRightIcon, ChevronRight } from "lucide-react";

export const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      <HeroUINavbar
        isBordered
        maxWidth="xl"
        position="sticky"
        className="bg-background/80 backdrop-blur-md py-1"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Brand */}
        <NavbarContent justify="start" className="basis-1/4">
          <NavbarBrand>
            <NextLink href="/" className="flex items-center gap-2">
              <Image
                src="/images/ronn-logo.svg"
                alt="Ronn Logo"
                width={100}
                height={70}
                priority
              />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Menu */}
        <NavbarContent justify="center" className="hidden lg:flex basis-2/4">
          <ul className="flex gap-4">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="flex items-center"
                >
                  <NextLink
                    href={item.href}
                    className="
                      uppercase text-[11px] tracking-wider font-semibold
                      text-foreground/80 transition-colors duration-200
                      hover:text-orange
                    "
                  >
                    {item.label}
                  </NextLink>

                  {/* Icon space reserved to prevent layout shift */}
                  <span className="ml-1 w-3 h-3 flex items-center justify-center">
                    <motion.span
                      variants={{
                        rest: { opacity: 0, x: -4 },
                        hover: { opacity: 1, x: 0 },
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="text-orange"
                    >
                      <ChevronRight className="w-3 h-3" />
                    </motion.span>
                  </span>
                </motion.div>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        {/* Right CTA */}
        <NavbarContent justify="end" className="hidden sm:flex basis-1/4 gap-4">
          <NavbarItem className="hidden md:flex">
            <Link
              isExternal
              className={buttonStyles({
                color: "primary",
                radius: "none",
                variant: "solid",
              })}
              href={siteConfig.links.docs}
            >
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-1" />
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile */}
        <NavbarContent justify="end" className="sm:hidden gap-2">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-4 mt-6 flex flex-col gap-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  href={item.href}
                  size="md"
                  className="uppercase tracking-wide"
                  onPress={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}

            <div className="pt-4 border-t border-divider">
              <ThemeSwitch />
            </div>
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </header>
  );
};
