"use client";

import { ClinicData } from "@/types";
import { Logo } from "@/components/logo";
import { ShieldCheck, Award, Phone } from "lucide-react";

interface FooterProps {
  data: ClinicData;
}

export function Footer({ data }: FooterProps) {
  const { footer } = data;

  return (
    <footer id="contact" className="bg-[#efeee8] border-t border-[#dddcd6] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 pb-12 border-b border-[#dddcd6]">
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="block mb-4">
              <Logo className="h-10 w-auto" />
            </a>
            <p className="text-xs text-[#5e665a] leading-relaxed mb-6 max-w-xs">
              {footer.description}
            </p>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#ffffff] rounded-full border border-[#dddcd6] w-fit">
                <ShieldCheck className="w-3.5 h-3.5 text-[#297a48]" />
                <span className="text-[0.6875rem] font-semibold text-[#3d493a]">{footer.straumannBadge}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#ffffff] rounded-full border border-[#dddcd6] w-fit">
                <Award className="w-3.5 h-3.5 text-[#297a48]" />
                <span className="text-[0.6875rem] font-semibold text-[#3d493a]">{footer.nobelBadge}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#1a1c19] mb-4">
              {footer.focusLinks.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {footer.focusLinks.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-xs text-[#5e665a] hover:text-[#1a1c19] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#1a1c19] mb-4">
              {footer.protocolLinks.title}
            </h4>
            <ul className="flex flex-col gap-2">
              {footer.protocolLinks.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-xs text-[#5e665a] hover:text-[#1a1c19] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-[#1a1c19] mb-4">
              Visit & Hours
            </h4>
            <div className="flex flex-col gap-1.5 text-xs text-[#5e665a] mb-5">
              <div>{footer.hours.weekdays}</div>
              <div>{footer.hours.saturday}</div>
              <div>{footer.hours.sunday}</div>
            </div>
            <div className="pt-3 border-t border-[#dddcd6]">
              <div className="text-[0.625rem] font-bold tracking-wider uppercase text-[#5e665a] mb-1">
                Direct line:
              </div>
              <a
                href={`tel:${data.doctor.phoneRaw}`}
                className="text-base font-bold text-[#1a1c19] hover:text-[#3d493a] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#3d493a]" />
                <span>{footer.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.6875rem] text-[#5e665a]">
          <div>{footer.copyright}</div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold text-[#1a1c19]">{footer.legalLicense}</span>
            {footer.legalLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="hover:text-[#1a1c19] transition-colors underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
