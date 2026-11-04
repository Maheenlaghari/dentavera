"use client";

import { useState } from "react";
import { NavItem } from "@/types";
import { Logo } from "@/components/logo";
import { Phone, Calendar, Menu, X } from "lucide-react";

interface HeaderProps {
  navItems: NavItem[];
  phoneDisplay: string;
  phoneRaw: string;
  onBookClick: () => void;
}

export function Header({
  navItems,
  phoneDisplay,
  phoneRaw,
  onBookClick,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f5f3ed]/95 backdrop-blur-md border-b border-[#dddcd6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center group">
          <Logo className="h-9 sm:h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#5e665a] hover:text-[#1a1c19] transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${phoneRaw}`}
            className="flex items-center gap-2 text-sm font-semibold text-[#1a1c19] hover:text-[#3d493a] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#3d493a]" />
            <span>{phoneDisplay}</span>
          </a>

          <button
            onClick={onBookClick}
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#1a1c19] bg-[#ffffff] border border-[#dddcd6] rounded-full hover:bg-[#f5f3ed] shadow-sm transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#3d493a]" />
            <span>Book Consultation</span>
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label="Toggle navigation menu"
          className="lg:hidden w-10 h-10 rounded-full bg-[#efeee8] flex items-center justify-center text-[#1a1c19]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#dddcd6] bg-[#f5f3ed] px-4 pt-3 pb-6 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#1a1c19] hover:bg-[#efeee8] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#dddcd6] flex flex-col gap-3">
            <a href={`tel:${phoneRaw}`} className="flex items-center gap-2 px-3 text-sm font-semibold text-[#1a1c19]">
              <Phone className="w-4 h-4 text-[#3d493a]" />
              <span>{phoneDisplay}</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
              type="button"
              className="btn-primary w-full py-3 text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
