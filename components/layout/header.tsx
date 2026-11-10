"use client";

import { useState } from "react";
import { Calendar, Menu, Phone, X } from "lucide-react";
import { useConsultation } from "@/components/consultation/consultation-provider";
import { Logo } from "@/components/layout/logo";
import type { Brand, Contact, HeaderContent } from "@/types/content";

interface HeaderProps {
  brand: Brand;
  contact: Contact;
  content: HeaderContent;
}

export function Header({ brand, contact, content }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openConsultation } = useConsultation();

  const closeMenu = () => setIsMenuOpen(false);

  const handleMobileBook = () => {
    closeMenu();
    openConsultation();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-canvas/95 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#" aria-label={brand.name}>
          <Logo brand={brand} />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {content.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${contact.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-olive"
          >
            <Phone aria-hidden="true" className="size-3.5 text-olive" />
            {contact.phoneDisplay}
          </a>
          <button type="button" onClick={openConsultation} className="btn btn-primary px-5 py-2.5">
            <Calendar aria-hidden="true" className="size-3.5" />
            {content.bookLabel}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="btn-icon lg:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex animate-fade-in flex-col gap-3 border-t border-line bg-canvas px-4 pb-6 pt-3 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {content.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 border-t border-line pt-3">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="flex items-center gap-2 px-3 text-sm font-semibold text-ink"
            >
              <Phone aria-hidden="true" className="size-4 text-olive" />
              {contact.phoneDisplay}
            </a>
            <button type="button" onClick={handleMobileBook} className="btn btn-primary w-full">
              <Calendar aria-hidden="true" className="size-4" />
              {content.bookLabel}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

