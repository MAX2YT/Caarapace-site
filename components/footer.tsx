"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

// Inline background gradient component (was in hover-footer.tsx)
function FooterBackgroundGradient() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#BD0F46]/10 via-[#BD0F46]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#BD0F46]/10 via-[#BD0F46]/5 to-transparent rounded-full blur-3xl" />
    </div>
  );
}

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
      { label: "About Caarapace", href: "/#intro" },
      { label: "Our Services", href: "/services" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "C-Deck", href: "/c-deck" },
      { label: "Pulse", href: "/pulse" },
      {
        label: "Contact Sales",
        href: "#contact-dialog",
        pulse: true,
      },
    ],
  },
];

const defaultContactItems: ContactItem[] = [
  {
    icon: <Mail size={18} className="text-[#BD0F46]" />,
    text: "info@caarapace.com",
    href: "mailto:info@caarapace.com",
  },
  {
    icon: <Phone size={18} className="text-[#BD0F46]" />,
    text: "+91 86103 05690",
    href: "tel:+918610305690",
  },
  {
    icon: <MapPin size={18} className="text-[#BD0F46]" />,
    text: "Chennai, Tamilnadu",
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
  description = "In Caarapace we build modern, scalable software products that help businesses move faster, innovate, and grow with confidence.",
  companyName = "Caarapace",
  logoSrc = "/logo.png",
  year = new Date().getFullYear(),
}: HoverFooterProps) {
  return (
    <footer className="relative m-4 mt-12 overflow-hidden rounded-3xl bg-white/80 shadow-[0_18px_45px_rgba(0,0,0,0.06)]">
      {/* Background CAARAPACE text - positioned behind everything */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <Image
          src="/caarapace-text.png"
          alt="Caarapace"
          width={1200}
          height={200}
          className="w-full max-w-4xl opacity-[0.12]"
          priority
        />
      </div>

      {/* Light overlay for better readability */}
      <div className="absolute inset-0 z-[5] bg-white/10 pointer-events-none" />

      <FooterBackgroundGradient />

      {/* Footer content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-10 md:py-14">
        <div className="grid grid-cols-2 gap-8 pb-8 sm:pb-10 md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-16">
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
                    {link.href === "#contact-dialog" ? (
                      <ContactFormDialog
                        trigger={
                          <button className="text-sm text-slate-600 transition-colors hover:text-[#BD0F46]">
                            {link.label}
                          </button>
                        }
                      />
                    ) : link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors hover:text-[#BD0F46]"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 transition-colors hover:text-[#BD0F46]"
                      >
                        {link.label}
                      </a>
                    )}
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
                      className="text-slate-600 transition-colors hover:text-[#BD0F46]"
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

        <hr className="my-6 border-t border-slate-200/60" />

        {/* Footer bottom */}
        <div className="flex justify-center w-full text-xs text-slate-500 md:text-sm">
          <p>
            &copy; {year} {companyName} -  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default HoverFooter;
