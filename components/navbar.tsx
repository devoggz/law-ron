"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/react";

import NextLink from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

import InquiryForm from "@/components/forms/InquiryForm";
import { siteConfig, services } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <header className="w-full sticky top-0 z-50">
      <HeroUINavbar
        isBordered
        maxWidth="xl"
        className="bg-background/80 backdrop-blur-md py-1"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* BRAND */}
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

        {/* DESKTOP NAV */}
        <NavbarContent justify="center" className="hidden lg:flex basis-2/4">
          <ul className="flex gap-6 items-center">
            {siteConfig.navItems.map((item) => {
              if (item.label === "Expertise") {
                return (
                  <NavbarItem key="expertise" className="relative group">
                    <span
                      className="
                        uppercase text-[11px] tracking-wider font-semibold
                        text-foreground/80 hover:text-orange
                        cursor-pointer flex items-center gap-1
                        h-full
                      "
                    >
                      Expertise
                      <ChevronRight className="w-3 h-3 rotate-90" />
                    </span>

                    {/* DROPDOWN */}
                    <div
                      className="
                        absolute top-full left-0 mt-2 bg-background shadow-xl
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-200 z-50
                        rounded-md
                      "
                    >
                      <ul className="py-2 min-w-[260px]">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <NextLink
                              href={`/services/${service.slug}`}
                              className="block px-4 py-2 text-sm text-foreground/80 hover:text-orange hover:bg-foreground/5 transition"
                            >
                              {service.label}
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavbarItem>
                );
              }

              return (
                <NavbarItem key={item.href}>
                  <motion.div whileHover={{ opacity: 1 }}>
                    <NextLink
                      href={item.href}
                      className="uppercase text-[11px] tracking-wider font-semibold text-foreground/80 hover:text-orange transition h-full flex items-center"
                    >
                      {item.label}
                    </NextLink>
                  </motion.div>
                </NavbarItem>
              );
            })}
          </ul>
        </NavbarContent>

        {/* CTA */}
        <NavbarContent justify="end" className="hidden sm:flex basis-1/4 gap-4">
          <NavbarItem>
            <Button
              onPress={onOpen}
              radius="none"
              className="text-white bg-teal-600 hover:bg-orange-700 px-5 py-2"
              endContent={<ChevronRight className="h-5 w-5" />}
            >
              Get Started
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
              <ModalContent>
                {() => (
                  <ModalBody className="pb-6">
                    <InquiryForm />
                  </ModalBody>
                )}
              </ModalContent>
            </Modal>
          </NavbarItem>
        </NavbarContent>

        {/* MOBILE TOGGLE */}
        <NavbarContent justify="end" className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* MOBILE MENU */}
        <NavbarMenu>
          <div className="mx-4 mt-6 flex flex-col gap-4">
            {siteConfig.navItems
              .filter((item) => item.label !== "Expertise")
              .map((item) => (
                <NavbarMenuItem key={item.label}>
                  <Link
                    href={item.href}
                    onPress={() => setIsMenuOpen(false)}
                    className="uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              ))}

            {/* MOBILE SERVICES */}
            <div className="pt-4 border-t border-divider">
              <p className="uppercase text-xs tracking-wider text-foreground/60 mb-2">
                Expertise
              </p>

              {services.map((service) => (
                <NavbarMenuItem key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    onPress={() => setIsMenuOpen(false)}
                    className="pl-2"
                  >
                    {service.label}
                  </Link>
                </NavbarMenuItem>
              ))}
            </div>
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </header>
  );
};
