"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

type FooterLink = {
  label: string;
  href: string;
  pulse?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type ContactItem = {
  icon?: React.ReactNode;
  text: string;
  href?: string;
};

type SocialLink = {
  icon?: React.ReactNode;
  label: string;
  href: string;
};

export type HoverFooterProps = {
  footerSections?: FooterSection[];
  contactItems?: ContactItem[];
  socialLinks?: SocialLink[];
  description?: string;
  companyName?: string;
  logoSrc?: string;
  year?: number;
};

const defaultFooterSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About Caarapace", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Case Studies", href: "#case-studies" },
      {
        label: "Contact Sales",
        href: "#contact",
        pulse: true,
      },
    ],
  },
];

const defaultContactItems: ContactItem[] = [
  {
    icon: <Mail size={18} className="text-[#BD0D46]" />,
    text: "hello@caarapace.com",
    href: "mailto:hello@caarapace.com",
  },
  {
    icon: <Phone size={18} className="text-[#BD0D46]" />,
    text: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: <MapPin size={18} className="text-[#BD0D46]" />,
    text: "Remote-first, global team",
  },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
  { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
  { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
  { icon: <Globe size={20} />, label: "Website", href: "https://caarapace.com" },
  { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
];

function HoverFooter({
  footerSections = defaultFooterSections,
  contactItems = defaultContactItems,
  socialLinks = defaultSocialLinks,
  description = "Caarapace Inc. builds modern, scalable software products that help businesses move faster, innovate, and grow with confidence.",
  companyName = "Caarapace Inc.",
  logoSrc = "/logo.png",
  year = new Date().getFullYear(),
}: HoverFooterProps) {
  return (
    <footer className="relative m-4 mt-12 overflow-hidden rounded-3xl bg-white/80 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-16">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={logoSrc}
                alt={`${companyName} logo`}
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">
              {description}
            </p>
          </div>

          {/* Footer link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-5 text-lg font-semibold text-slate-900">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-[#BD0D46]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactItems.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm">
                  {item.icon && item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-600 transition-colors hover:text-[#BD0D46]"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-600">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-6 border-t border-slate-200" />

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 md:flex-row md:text-sm">
          <div className="flex space-x-5 text-slate-500">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="transition-colors hover:text-[#BD0D46]"
              >
                {item.icon && item.icon}
              </a>
            ))}
          </div>

          <p className="text-center md:text-right">
            &copy; {year} {companyName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="pointer-events-none relative hidden h-[19rem] -mt-22 -mb-22 items-center justify-center px-1 lg:flex">
        <TextHoverEffect text="CAARAPACE" className="w-full" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
